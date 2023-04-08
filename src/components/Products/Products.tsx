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
import { ProductItem } from '../ProductItem/ProductItem';

interface ProductsProps extends DetailsUlProps { }

export const Products = ({ className, ...props }: ProductsProps) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const { products } = useSelector((data: AppState) => data.products)
  const { cart } = useSelector((data: AppState) => data.products)


  const addToCart = (id: number) => {
    dispatch(addCount(id))
    dispatch(addProductToCart(id))
  }

  return (
    <ul className={cn(styles.products, className)} {...props}>
      {products.map(product => (
        <ProductItem product={product} key={product.id} addToCart={addToCart} />
      ))
      }
    </ul >
  )
};


