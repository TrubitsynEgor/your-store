import { DetailsDivProps, IProducts } from '@/types';
import styles from './ProductDetails.module.scss';
import cn from 'classnames'
import { Button, MButton } from '../UI/Button/Button';
import { convertPrice } from '@/helpers/convertPrice';
import Link from 'next/link';
import { TfiBackLeft } from 'react-icons/tfi'
import { AppDispatch } from '@/store/store';
import { addCount, addProductToCart } from '@/store/products/products.slice';
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
interface ProductDetailsProps extends DetailsDivProps {
  product: IProducts
}

export const ProductDetails = ({ product, className, ...props }: ProductDetailsProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const addToCart = (id: number) => {
    dispatch(addCount(id))
    dispatch(addProductToCart(id))
  }

  const variants = {
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.7
      },
    }),
    hidden: {
      x: 1000,
      opacity: 0
    }
  }

  return (

    <motion.div variants={variants} className={cn(styles.productDetails, className)} >
      <Link className={styles.link} href='/products'><TfiBackLeft />catalog</Link>
      <motion.div variants={variants} animate='visible' initial='hidden' custom={1} className={styles.imgBox}>
        <img className={styles.img} src={product.image} alt={product.title} />
        <span className={styles.category}>{product.category}</span>
      </motion.div>

      <motion.div className={styles.content}>
        <motion.h3 variants={variants} animate='visible' initial='hidden' custom={2} className={styles.title}>{product.title}</motion.h3>
        <motion.p variants={variants} animate='visible' initial='hidden' custom={3} className={styles.description}>{product.description}</motion.p>
        <motion.div variants={variants} animate='visible' initial='hidden' custom={4} className={styles.price}>{product.price.toFixed(2)} $</motion.div>
        <MButton variants={variants} animate='visible' initial='hidden' custom={5} onClick={() => addToCart(product.id)} className={styles.btn}>Add to cart</MButton>
      </motion.div>
    </motion.div>
  )
};
