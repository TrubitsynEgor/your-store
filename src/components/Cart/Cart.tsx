import { DetailsUlProps } from '@/types';
import styles from './Cart.module.scss';
import cn from 'classnames'
import { AppDispatch, AppState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../UI/Button/Button';
import { FaWindowClose } from 'react-icons/fa'
import { convertPrice } from '@/helpers/convertPrice';
import { RemoveProduct, deleteCount, removeProductFromCart, setCartCount, setCount } from '@/store/products/products.slice';
import { ChangeEvent } from 'react'
import { Input } from '../UI/Input/Input';
import { CartItem } from '../CartItem/CartItem';


interface CartProps extends DetailsUlProps { }

export const Cart = ({ className, ...props }: CartProps) => {

  const { cart } = useSelector((state: AppState) => state.products)
  const dispatch = useDispatch<AppDispatch>()



  const removeProduct = (id: number) => {
    dispatch(RemoveProduct(id))
    dispatch(deleteCount())
  }

  return (
    <ul className={cn(styles.cart, className)} {...props}>
      {cart.map(el => (
        <CartItem key={el.id} product={el} removeProduct={removeProduct} />
      ))}
    </ul>
  )
};
