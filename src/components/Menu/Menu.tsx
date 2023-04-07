import { DetailsUlProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { useEffect } from 'react';
import { getAllCategories } from '@/store/products/categoriesSlice';
import { AppDispatch, AppState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux'
interface MenuProps {
}

export const Menu = ({ ...props }: MenuProps) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const { categories } = useSelector((state: AppState) => state.categories)

  return (
    <nav className={cn(styles.menu)} {...props}>
      <ul className={styles.list}>
        {categories.map((category: string) => (
          <li key={category} className={styles.item}>
            <Link href={`/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};


