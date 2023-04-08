import { DetailsDivProps, IProducts } from '@/types';
import styles from './CartItem.module.scss';
import cn from 'classnames'
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { FaWindowClose } from 'react-icons/fa';
import { useState } from 'react'
import { AppDispatch } from '@/store/store';
import { useDispatch, } from 'react-redux'
import { decreasePrice, decreasePriceWithRemove, increasePrice } from '@/store/products/products.slice';
import { IoIosArrowDropdown } from 'react-icons/io'
import { RemoveProduct, deleteCount } from '@/store/products/products.slice';

interface CartItemProps extends DetailsDivProps {
  product: IProducts

}

export const CartItem = ({ product, className, ...props }: CartItemProps) => {

  const [cartCount, setCartCount] = useState<number>(1)
  const [itemPrice, setItemPrice] = useState<number>(product.price)
  const dispatch = useDispatch<AppDispatch>()

  const removeProduct = (id: number) => {
    dispatch(RemoveProduct(id))
    dispatch(deleteCount())
    dispatch(decreasePriceWithRemove(product.price * cartCount))
  }


  const increaseCartCount = () => {
    if (cartCount <= 99) {
      setCartCount(cartCount + 1)
      setItemPrice(product.price)
      dispatch(increasePrice(itemPrice))
    }
  }
  const decreaseCartCount = () => {
    if (cartCount > 1) {
      setCartCount(cartCount - 1)
      setItemPrice(product.price)
      dispatch(decreasePrice(itemPrice))
    }
  }



  return (
    <li className={styles.cartItem} >
      <img className={styles.img} src={product.image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.category}>{product.category}</div>
      <div className={styles.countBox}>
        <div className={styles.countBtnBox}>
          <Button className={styles.countBtn} onClick={increaseCartCount}><IoIosArrowDropdown /></Button>
          <Button className={styles.countBtn} onClick={decreaseCartCount}><IoIosArrowDropdown /></Button>
        </div>
        <Input value={cartCount} className={styles.input} type='number' readOnly />
      </div>

      <div className={styles.price}>{(cartCount * product.price).toFixed(2)} $</div>
      <Button onClick={() => removeProduct(product.id)} className={styles.btn}><FaWindowClose /></Button>
    </li>
  )
};
