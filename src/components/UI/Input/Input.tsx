import { DetailsInputProps } from '@/types';
import styles from './Input.module.scss';
import cn from 'classnames'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: '500',
  subsets: ['latin'],
})

interface InputProps extends DetailsInputProps { }

export const Input = ({ children, className, ...props }: InputProps) => {

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {children}
      <input className={cn(styles.input, className, roboto.className)} {...props} />

    </div>
  )
};
