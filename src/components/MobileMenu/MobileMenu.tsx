import { DetailsDivProps } from '@/types';
import styles from './MobileMenu.module.scss';
import cn from 'classnames'
import { FiMenu } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { Button } from '../UI/Button/Button';
import { Menu } from '../Menu/Menu';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { useState } from 'react'
import { Social } from '../UI/Social/Social';
import { Logo } from '../UI/Logo/Logo';

interface MobileMenuProps extends DetailsDivProps {
  onHandleMenu: () => void
  menuIsVisible: boolean
}

export const MobileMenu = ({ menuIsVisible, onHandleMenu, className, ...props }: MobileMenuProps) => {


  return (
    <div className={cn(styles.mobileMenu, className)} {...props}>
      <Logo />
      <SearchPanel menuIsVisible={menuIsVisible} onHandleMenu={onHandleMenu} className={styles.searchPanel} />
      <Menu />
      <Social />
    </div>
  )
};
