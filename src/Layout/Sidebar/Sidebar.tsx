import { DetailsDivProps } from '@/types';
import styles from './Sidebar.module.scss';
import cn from 'classnames'
import { LoginForm, Menu, RegisterForm, UserMenu } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

interface SidebarProps extends DetailsDivProps {
}

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  const router = useRouter()
  const user = useAuth()

  if (router.asPath === '/register') {
    return (
      <div className={cn(styles.sidebar, className)}  {...props}>
        <Menu />
      </div>
    )
  }
  return (
    <div className={cn(styles.sidebar, className)}  {...props}>
      <Menu />
      {!user?.isAuth ? <LoginForm /> : <UserMenu />}

    </div>
  )
};
