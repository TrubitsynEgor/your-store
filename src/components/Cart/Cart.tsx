import { DetailsUlProps } from '@/types';
import styles from './Cart.module.scss';
import cn from 'classnames'
import { AppState } from '@/store/store';
import { useSelector } from 'react-redux'
import { GiCat } from 'react-icons/gi'
import { CartItem } from '../CartItem/CartItem';
import { Button } from '../UI/Button/Button';

interface CartProps extends DetailsUlProps { }

export const Cart = ({ className, ...props }: CartProps) => {

  const { cart } = useSelector((state: AppState) => state.products)
  const { totalPrice } = useSelector((state: AppState) => state.products)





  return (
    <ul className={cn(styles.cart, className)} {...props}>
      {cart.map(el => (
        <CartItem key={el.id} product={el} />
      ))}

      {cart.length > 0 ? <div className={styles.totalPrice}>
        <span>Total: {totalPrice.toFixed(2)}</span>
        <Button className={styles.totalPriceBtn}>Place an order</Button>
      </div>
        : <h3 className={styles.empty}>Your cart is empty <GiCat /></h3>}
    </ul>
  )
};
