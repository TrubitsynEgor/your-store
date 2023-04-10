import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { BsCartCheck } from 'react-icons/bs'
import { Button, LoginForm, MobileMenu, Modal, SearchPanel, Social } from '@/components';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '@/store/store';
import { Logo } from '@/components';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa'
import { useAuth } from '@/hooks/useAuth';


interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {


  const { count } = useSelector((state: AppState) => state.products)
  const user = useAuth()
  const username = user?.email.split('@')[0]
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openMenu = () => {
    setMenuIsVisible(true)
  }
  const closeMenu = () => {
    setMenuIsVisible(false)

  }
  const openLoginModal = () => {
    if (!user?.isAuth) {
      setModalIsOpen(true)
    }
  }
  const closeLoginModal = () => {
    setModalIsOpen(false)
  }

  return (
    <header className={cn(styles.header, className)} {...props}>

      <Logo className={cn(styles.logo, {
        [styles.active]: menuIsVisible
      })} />
      <SearchPanel className={cn(styles.searchPanel, {
        [styles.visible]: menuIsVisible
      })} />

      <Link href='/cart' className={styles.cart} aria-label='Cart'>
        <BsCartCheck /> <span tabIndex={0} aria-label={`Product in cart${count}`} className={styles.count}>{count}</span>
      </Link>

      <Link
        href={user?.isAuth ? '/profile' : '#'}
        onClick={openLoginModal}
        className={cn(styles.userBtn)}>
        <FaUser />
      </Link>
      {user?.isAuth && <div className={styles.welcome}>Welcome! {username}</div>}
      {!menuIsVisible
        ? <Button
          className={styles.btn}
          aria-label='open menu'
          onClick={() => openMenu()}
        ><FiMenu className={styles.icon} /></Button>
        : <Button
          className={styles.btn}
          aria-label='close menu'
          onClick={() => closeMenu()}
        ><RiCloseFill className={styles.icon} /></Button>
      }

      <Social className={cn(styles.social, {
        [styles.socialIsVisible]: menuIsVisible
      })} />

      <MobileMenu menuIsVisible={menuIsVisible} onHandleMenu={closeMenu} className={cn({
        [styles.open]: menuIsVisible
      })} />

      {modalIsOpen &&
        <Modal toggleVisible={closeLoginModal} className={styles.modal}>
          <LoginForm modalIsOpen={modalIsOpen} onCloseLoginModal={closeLoginModal} className={styles.loginForm} />
        </Modal>
      }
    </header >
  )
};
