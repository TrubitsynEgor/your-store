import { DetailsDivProps, IProducts } from '@/types';
import styles from './CartItem.module.scss';
import cn from 'classnames'
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { convertPrice } from '@/helpers/convertPrice';
import { FaWindowClose } from 'react-icons/fa';
import { useState, ChangeEvent } from 'react'

interface CartItemProps extends DetailsDivProps {
  product: IProducts
  removeProduct: (id: number) => void
}

export const CartItem = ({ removeProduct, product, className, ...props }: CartItemProps) => {

  const [cartCount, setCartCount] = useState<number>(1)

  const handleCartCount = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    setCartCount(+e.target.value)
  }



  return (
    <li className={styles.cartItem} >
      <img className={styles.img} src={product.image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.category}>{product.category}</div>
      <Input onChange={(e) => handleCartCount(e, product.id)} value={cartCount} min={1} max={99} type='number' className={styles.input} />
      <div className={styles.price}>{(cartCount * product.price).toFixed(2)} $</div>
      <Button onClick={() => removeProduct(product.id)} className={styles.btn}><FaWindowClose /></Button>
    </li>
  )
};
