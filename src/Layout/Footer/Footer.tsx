import { DetailsDivProps } from '@/types';
import styles from './Footer.module.scss';
import cn from 'classnames'
import { Logo } from '@/components';
import { FaRegCopyright } from 'react-icons/fa'
interface FooterProps extends DetailsDivProps { }

export const Footer = ({ className, ...props }: FooterProps) => {

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <span className={styles.copyright}>Copyright <span><FaRegCopyright /></span> <span>{new Date().getFullYear()}</span></span>

      <Logo />
    </footer>
  )
};
