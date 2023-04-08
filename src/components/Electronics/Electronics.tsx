import { DetailsUlProps } from '@/types';
import styles from './Electronics.module.scss';
import cn from 'classnames'
import { addCount, addProductToCart, getAllProducts } from '@/store/products/products.slice';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@/store/store';
import Link from 'next/link';
import { Button } from '../UI/Button/Button';
import { convertPrice } from '@/helpers/convertPrice';
import { ProductItem } from '../ProductItem/ProductItem';

interface ElectronicsProps extends DetailsUlProps { }

export const Electronics = ({ className, ...props }: ElectronicsProps) => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])


  const { products } = useSelector((data: AppState) => data.products)

  const sortedProducts = products.filter(product => product.category === 'electronics')

  const addToCart = (id: number) => {
    dispatch(addCount(id))
    dispatch(addProductToCart(id))
  }

  return (
    <ul className={cn(styles.electronics, className)} {...props}>
      {sortedProducts.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))
      }
    </ul >
  )
};
