import { DetailsDivProps } from '@/types';
import styles from './Logo.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { AiOutlineAmazon } from 'react-icons/ai';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: '700',
  subsets: ['latin']
})

interface LogoProps extends DetailsDivProps { }

export const Logo = ({ className, ...props }: LogoProps) => {

  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Link href='/' className={cn(kanit.className, styles.logo)}>
        YourStore <AiOutlineAmazon />
      </Link>

    </div>
  )
};
