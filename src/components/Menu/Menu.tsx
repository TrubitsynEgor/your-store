import { DetailsDivProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'

interface MenuProps extends DetailsDivProps { }

export const Menu = ({ className, ...props }: MenuProps) => {

  return (
    <nav className={cn(styles.menu, className)} {...props}>
      <ul>

      </ul>
    </nav>
  )
};
