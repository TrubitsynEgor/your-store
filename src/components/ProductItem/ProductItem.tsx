import { DetailsDivProps, IProducts } from '@/types';
import styles from './ProductItem.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { Button } from '../UI/Button/Button';
import { convertPrice } from '@/helpers/convertPrice';

interface ProductItemProps extends DetailsDivProps {
  product: IProducts
  addToCart: (id: number) => void
}

export const ProductItem = ({ addToCart, product, className, ...props }: ProductItemProps) => {

  return (
    <li className={styles.item}>

      <div className={styles.box}>
        <Link href={`products/${product.id}`} >
          <img className={styles.img} src={product.image} alt={product.title} />
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
        </Link>
        <div className={styles.priceBox}>
          <span className={styles.price} tabIndex={0} aria-label={`price ${convertPrice(product.price)} `}>{convertPrice(product.price)}</span>
          <Button onClick={() => addToCart(product.id)} className={styles.btn}>Add to cart</Button>
        </div>
        <span className={styles.category}>{product.category}</span>
      </div>

    </li>
  )
};
