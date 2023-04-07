import { DetailsDivProps, IProducts } from '@/types';
import styles from './ProductDetails.module.scss';
import cn from 'classnames'
import { Button } from '../UI/Button/Button';
import { convertPrice } from '@/helpers/convertPrice';
import Link from 'next/link';
import { TfiBackLeft } from 'react-icons/tfi'

interface ProductDetailsProps extends DetailsDivProps {
  product: IProducts
}

export const ProductDetails = ({ product, className, ...props }: ProductDetailsProps) => {

  return (

    <div className={cn(styles.productDetails, className)} {...props}>
      <Link className={styles.link} href='/products'><TfiBackLeft />catalog</Link>
      <div className={styles.imgBox}>
        <img className={styles.img} src={product.image} alt={product.title} />
        <span className={styles.category}>{product.category}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>{convertPrice(product.price)}</div>
        <Button className={styles.btn}>Add to cart</Button>
      </div>
    </div>
  )
};
