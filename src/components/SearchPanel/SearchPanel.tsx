import { DetailsInputProps } from '@/types';
import styles from './SearchPanel.module.scss';
import cn from 'classnames'
import { FcSearch } from 'react-icons/fc';
import { Input } from '../UI/Input/Input';
import React, { useEffect, useState } from 'react'
import { getSearchedProduct } from '@/store/products/products.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useRouter } from 'next/router';


interface SearchPanelProps extends DetailsInputProps {
  onHandleMenu?: () => void
  menuIsVisible?: boolean
}

export const SearchPanel = ({ menuIsVisible, onHandleMenu, className, ...props }: SearchPanelProps) => {
  const { asPath } = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const [value, setValue] = useState<string>('')
  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(getSearchedProduct(value))
    }, 500);

    return () => clearTimeout(debounce)
  }, [value])


  const closeMenuOnKeyDown = (e: React.KeyboardEvent) => {
    if (menuIsVisible && e.key === 'Enter') onHandleMenu!()
  }



  if (asPath === '/products' || asPath === '/electronics' ||
    asPath === '/jewelery' || asPath === "/men's" ||
    asPath === "/women's" || asPath === '/') {
    return (
      <Input className={cn(styles.searchPanel, className)} {...props}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='search product...'
        onKeyDown={(e) => closeMenuOnKeyDown(e)}
      >
        <div className={styles.searchBtn}>
          <FcSearch className={styles.searchIcon} />
        </div>
      </Input>
    )
  }
  return <></>

};
