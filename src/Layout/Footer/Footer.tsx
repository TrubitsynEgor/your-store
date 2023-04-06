import { DetailsDivProps } from '@/types';
import styles from './Footer.module.scss';
import cn from 'classnames'

interface FooterProps extends DetailsDivProps { }

export const Footer = ({ className, ...props }: FooterProps) => {

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <h2>I'm footer =)</h2>
    </footer>
  )
};
