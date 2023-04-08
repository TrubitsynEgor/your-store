import { DetailsDivProps } from '@/types';
import styles from './Error404.module.scss';
import cn from 'classnames'
import { TbError404 } from 'react-icons/tb'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
interface Error404Props extends DetailsDivProps { }

export const Error404 = ({ className, ...props }: Error404Props) => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000);

  }, [])


  return (
    <div className={cn(styles.error404, className)} {...props}>
      <h2>Oops this page doesn't seem to exist</h2>
      <TbError404 />
      <h2>I think I'll send you to the home page</h2>
    </div>
  )
};
