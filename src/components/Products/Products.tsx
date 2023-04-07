import { DetailsUlProps } from '@/types';
import styles from './Products.module.scss';
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllProducts } from '@/store/products/products.slice';
import { AppDispatch, AppState } from '@/store/store';
import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import Link from 'next/link';
import { convertPrice } from '@/helpers/convertPrice';

interface ProductsProps extends DetailsUlProps { }

export const Products = ({ className, ...props }: ProductsProps) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const { products } = useSelector((data: AppState) => data.products)

  return (
    <ul className={cn(styles.products, className)} {...props}>
      {products.map(product => (
        <li key={product.id} className={styles.item}>
          <Link href={`products/${product.id}`} >
            <div className={styles.box}>
              <img className={styles.img} src={product.image} alt={product.title} />
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.priceBox}>
                <span className={styles.price}>{convertPrice(product.price)}</span>
                <Button className={styles.btn}>Add to cart</Button>
              </div>
              <span className={styles.category}>{product.category}</span>
            </div>
          </Link>
        </li>
      ))
      }
    </ul >
  )
};


