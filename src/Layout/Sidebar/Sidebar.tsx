import { DetailsDivProps } from '@/types';
import styles from './Sidebar.module.scss';
import cn from 'classnames'

interface SidebarProps extends DetailsDivProps { }

export const Sidebar = ({ className, ...props }: SidebarProps) => {

  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <h2>I'm sidebar!</h2>
    </div>
  )
};
