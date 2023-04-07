import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { Kanit } from 'next/font/google';
import { AiOutlineAmazon } from 'react-icons/ai'
import Link from 'next/link';
import { FcSearch } from 'react-icons/fc'
import { Button, Input, Social } from '@/components';

const kanit = Kanit({
  weight: '700',
  subsets: ['latin']
})

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Link href='/' className={cn(kanit.className, styles.logo)}>
        YourStore <AiOutlineAmazon />
      </Link>

      <Input placeholder='search...' className={styles.input} >
        <Button
          onClick={() => console.log('search')}
          className={styles.searchBtn}
        >
          <FcSearch className={styles.searchIcon} />
        </Button>
      </Input>

      <Social />
    </header >
  )
};
