import { DetailsDivProps } from '@/types';
import styles from './UserMenu.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { FaUserSecret } from 'react-icons/fa'
import { Button } from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { removeUser } from '@/store/users/userSlice';

interface UserMenuProps extends DetailsDivProps { }

export const UserMenu = ({ className, ...props }: UserMenuProps) => {

  const user = useAuth()
  const username = user?.email.split('@')[0]
  const dispatch = useDispatch<AppDispatch>()

  const logout = () => {
    dispatch(removeUser())
  }
  return (
    <nav className={cn(styles.userMenu, className)} {...props}>
      <h3>Welcome {username}!</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={`/profile/${username}`}> <FaUserSecret />Profile</Link>
        </li>
        <li className={styles.item}>
          <Button className={styles.btn} type='button' onClick={logout}>Logout</Button>
        </li>


      </ul>
    </nav>
  )
};
