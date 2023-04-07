import { DetailsUlProps } from '@/types';
import styles from './Electronics.module.scss';
import cn from 'classnames'
import { getAllProducts } from '@/store/products/products.slice';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@/store/store';
import Link from 'next/link';
import { Button } from '../UI/Button/Button';
import { convertPrice } from '@/helpers/convertPrice';

interface ElectronicsProps extends DetailsUlProps { }

export const Electronics = ({ className, ...props }: ElectronicsProps) => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const { products } = useSelector((data: AppState) => data.products)

  const sortedProducts = products.filter(product => product.category === 'electronics')

  return (
    <ul className={cn(styles.electronics, className)} {...props}>
      {sortedProducts.map(product => (
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
