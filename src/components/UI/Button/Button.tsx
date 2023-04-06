import { DetailsBtnProps } from '@/types';
import styles from './Button.module.scss';
import cn from 'classnames'

interface ButtonProps extends DetailsBtnProps { }

export const Button = ({ children, className, ...props }: ButtonProps) => {

  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
};
