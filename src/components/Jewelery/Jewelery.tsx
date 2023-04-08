import { DetailsUlProps } from '@/types';
import styles from './Jewelery.module.scss';
import cn from 'classnames'
import { addCount, addProductToCart, getAllProducts } from '@/store/products/products.slice';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@/store/store';
import { ProductItem } from '../ProductItem/ProductItem';

interface JeweleryProps extends DetailsUlProps { }

export const Jewelery = ({ className, ...props }: JeweleryProps) => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const { products } = useSelector((data: AppState) => data.products)

  const sortedProducts = products.filter(product => product.category === 'jewelery')

  const addToCart = (id: number) => {
    dispatch(addCount(id))
    dispatch(addProductToCart(id))
  }

  return (
    <ul className={cn(styles.jewelery, className)} {...props}>
      {sortedProducts.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))
      }
    </ul >
  )
};
