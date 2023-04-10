import { DetailsUlProps } from '@/types';
import styles from './Cart.module.scss';
import cn from 'classnames'
import { AppState } from '@/store/store';
import { useSelector } from 'react-redux'
import { GiCat } from 'react-icons/gi'
import { CartItem } from '../CartItem/CartItem';
import { Button } from '../UI/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
interface CartProps extends DetailsUlProps { }

export const Cart = ({ className, ...props }: CartProps) => {

  const { cart } = useSelector((state: AppState) => state.products)
  const { totalPrice } = useSelector((state: AppState) => state.products)
  const user = useAuth()
  const router = useRouter()

  const placeAnOrder = () => {
    console.log(user?.isAuth);
    user?.isAuth
      ? router.push('/payment')
      : router.push('/register')
  }





  return (
    <> <ul className={cn(styles.cart, className)} {...props}>
      {cart.map(el => (
        <CartItem key={el.id} product={el} />
      ))}
    </ul>
      {cart.length > 0 ? <div className={styles.totalPrice}>
        <span tabIndex={0} aria-label={`Total price ${totalPrice.toFixed(2)} $`}>Total: {totalPrice.toFixed(2)} $</span>
        <Button
          type='button'
          onClick={placeAnOrder}
          className={styles.totalPriceBtn}>Place an order</Button>
      </div>
        : <h3 className={styles.empty} tabIndex={0}>Your cart is empty <GiCat /></h3>}
    </>
  )

};
