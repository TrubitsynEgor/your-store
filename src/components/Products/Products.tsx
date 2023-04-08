import { DetailsUlProps } from '@/types';
import styles from './Products.module.scss';
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addCount, addProductToCart, getAllProducts, setCount } from '@/store/products/products.slice';
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
  const { cart } = useSelector((data: AppState) => data.products)


  const addToCart = (id: number) => {
    dispatch(addCount())
    dispatch(addProductToCart(id))
  }

  return (
    <ul className={cn(styles.products, className)} {...props}>
      {products.map(product => (
        <li key={product.id} className={styles.item}>

          <div className={styles.box}>
            <Link href={`products/${product.id}`} >
              <img className={styles.img} src={product.image} alt={product.title} />
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
            </Link>
            <div className={styles.priceBox}>
              <span className={styles.price}>{convertPrice(product.price)}</span>
              <Button onClick={() => addToCart(product.id)} className={styles.btn}>Add to cart</Button>
            </div>
            <span className={styles.category}>{product.category}</span>
          </div>

        </li>
      ))
      }
    </ul >
  )
};


