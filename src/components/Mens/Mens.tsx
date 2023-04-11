import { DetailsUlProps } from '@/types';
import styles from './Mens.module.scss';
import cn from 'classnames'
import { addCount, addProductToCart, getAllProducts } from '@/store/products/products.slice';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@/store/store';
import { MProductItem, ProductItem } from '../ProductItem/ProductItem';
import { variants } from '../Cart/Cart';

interface MensProps extends DetailsUlProps { }

export const Mens = ({ className, ...props }: MensProps) => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const { products } = useSelector((data: AppState) => data.products)

  const sortedProducts = products.filter(product => product.category === "men's clothing")
  const addToCart = (id: number) => {
    dispatch(addCount(id))
    dispatch(addProductToCart(id))
  }
  return (
    <ul className={cn(styles.mens, className)} {...props}>
      {sortedProducts.map((product, i) => (
        <MProductItem variants={variants} initial='hidden' animate='visible' custom={i}
          key={product.id} product={product} addToCart={addToCart} />
      ))
      }
    </ul >
  )
};
