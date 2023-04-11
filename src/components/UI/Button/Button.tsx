import { DetailsBtnProps } from '@/types';
import styles from './Button.module.scss';
import cn from 'classnames'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
interface ButtonProps extends DetailsBtnProps { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }: ButtonProps, ref) => {

  return (
    <button ref={ref} className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
});


export const MButton = motion(Button)