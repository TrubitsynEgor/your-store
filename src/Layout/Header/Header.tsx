import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { FcSearch } from 'react-icons/fc'
import { BsCartCheck } from 'react-icons/bs'
import { Button, Input, Social } from '@/components';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@/store/store';
import { getSearchedProduct } from '@/store/products/products.slice';
import { Logo } from '@/components';


interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {

  const [value, setValue] = useState<string>('')
  const { count } = useSelector((state: AppState) => state.products)
  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(getSearchedProduct(value))
    }, 500);

    return () => clearTimeout(debounce)
  }, [value])


  return (
    <header className={cn(styles.header, className)} {...props}>
      <Logo />
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
