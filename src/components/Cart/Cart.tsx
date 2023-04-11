import { DetailsUlProps } from '@/types';
import styles from './Cart.module.scss';
import cn from 'classnames'
import { AppState } from '@/store/store';
import { useSelector } from 'react-redux'
import { GiCat } from 'react-icons/gi'
import { MCartItem } from '../CartItem/CartItem';
import { Button } from '../UI/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'
interface CartProps extends DetailsUlProps { }


export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.4,
    }
  }),
  hidden: { opacity: 0 }
}
export const Cart = ({ className, ...props }: CartProps) => {

  const { cart } = useSelector((state: AppState) => state.products)
  const { totalPrice } = useSelector((state: AppState) => state.products)
  const user = useAuth()
  const router = useRouter()

  const placeAnOrder = () => {
    user?.isAuth
      ? router.push('/payment')
      : router.push('/register')
  }


  return (
    <> <ul className={cn(styles.cart, className)} {...props}>
      {cart.map((el, i) => (
        <MCartItem key={el.id} variants={variants} initial='hidden' animate='visible' custom={i} product={el} />
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
