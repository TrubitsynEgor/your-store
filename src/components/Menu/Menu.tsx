import { DetailsUlProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { useEffect } from 'react';
import { getAllCategories } from '@/store/products/categoriesSlice';
import { AppDispatch, AppState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
interface MenuProps {
}

export const Menu = ({ ...props }: MenuProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const { categories } = useSelector((state: AppState) => state.categories)
  const filteredCategory = categories.map(el => {
    if (el.includes(' ')) {
      const firstEl = el.split(" ")[0]
      return firstEl
    }
    return el
  })
  return (
    <nav className={cn(styles.menu)} {...props}>
      <ul className={styles.list}>
        {filteredCategory.map((category: string) => (
          <li key={category} className={styles.item}>
            <Link href={`/${category}`}
              className={cn(styles.link, {
                [styles.active]: router.asPath === `/${category}`
              })}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};


