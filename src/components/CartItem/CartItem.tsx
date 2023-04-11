import { DetailsLiProps, IProducts } from '@/types';
import styles from './CartItem.module.scss';
import cn from 'classnames'
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { FaWindowClose } from 'react-icons/fa';
import { forwardRef, useState } from 'react'
import { AppDispatch } from '@/store/store';
import { useDispatch, } from 'react-redux'
import { decreasePrice, decreasePriceWithRemove, increasePrice } from '@/store/products/products.slice';
import { IoIosArrowDropdown } from 'react-icons/io'
import { RemoveProduct, deleteCount } from '@/store/products/products.slice';
import { motion } from 'framer-motion'
import Link from 'next/link';

interface CartItemProps extends DetailsLiProps {
  product: IProducts
}

export const CartItem = forwardRef<HTMLLIElement, CartItemProps>(({ product, className, ...props }: CartItemProps, ref) => {

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
    <li ref={ref} className={styles.cartItem} {...props}>
      <img className={styles.img} src={product.image} alt={product.title} />
      <Link className={styles.title} href={`products/${product.id}`}><h3 tabIndex={0} aria-label={`Product title ${product.title}`} >{product.title}</h3></Link>
      <p tabIndex={0} aria-label={`Product description ${product.description}`} className={styles.description}>{product.description}</p>
      <div className={styles.category}>{product.category}</div>
      <div tabIndex={0} aria-label='Product count' className={styles.countBox}>
        <div className={styles.countBtnBox}>
          <Button
            aria-label={`plus count, now count ${cartCount}`}
            className={styles.countBtn}
            onClick={increaseCartCount}
          >
            <IoIosArrowDropdown />
          </Button>
          <Button aria-label={`minus count, now count ${cartCount}`}
            className={styles.countBtn}
            onClick={decreaseCartCount}>
            <IoIosArrowDropdown />
          </Button>
        </div>
        <Input tabIndex={-1} value={cartCount} className={styles.input} type='number' readOnly />

        <div className={styles.price} tabIndex={0}
          aria-label={`Price for this product ${(cartCount * product.price).toFixed(2)}} $`}>
          {(cartCount * product.price).toFixed(2)} $
        </div>
      </div>


      <Button
        aria-label='Remove product from cart'
        onClick={() => removeProduct(product.id)}
        className={styles.btn}>
        <FaWindowClose />
      </Button>
    </li>
  )
});


export const MCartItem = motion(CartItem)