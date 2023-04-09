import { DetailsDivProps } from '@/types';
import styles from './Sidebar.module.scss';
import cn from 'classnames'
import { LoginForm, Menu, RegisterForm } from '@/components';

interface SidebarProps extends DetailsDivProps {
}

export const Sidebar = ({ className, ...props }: SidebarProps) => {

  return (
    <div className={cn(styles.sidebar, className)}  {...props}>
      <Menu />
      <LoginForm />
      <RegisterForm />
    </div>
  )
};
