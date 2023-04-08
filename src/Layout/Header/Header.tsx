import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { Kanit } from 'next/font/google';
import { AiOutlineAmazon } from 'react-icons/ai'
import Link from 'next/link';
import { FcSearch } from 'react-icons/fc'
import { BsCartCheck } from 'react-icons/bs'
import { Button, Input, Social } from '@/components';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@/store/store';
import { getSearchedProduct } from '@/store/products/products.slice';
const kanit = Kanit({
  weight: '700',
  subsets: ['latin']
})

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {

  const [value, setValue] = useState<string>('')
  const { count } = useSelector((state: AppState) => state.products)
  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {
    dispatch(getSearchedProduct(value))
  }, [value])


  return (
    <header className={cn(styles.header, className)} {...props}>
      <Link href='/' className={cn(kanit.className, styles.logo)}>
        YourStore <AiOutlineAmazon />
      </Link>

      <Input onChange={(e) => setValue(e.target.value)} value={value} placeholder='search...' className={styles.input} >
        <Button
          onClick={() => console.log('search')}
          className={styles.searchBtn}
        >
          <FcSearch className={styles.searchIcon} />
        </Button>
      </Input>
      <Link href='/cart' className={styles.cart}><BsCartCheck /> <span className={styles.count}>{count}</span> </Link>
      <Social />
    </header >
  )
};
