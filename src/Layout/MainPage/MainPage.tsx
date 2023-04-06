import { DetailsDivProps } from '@/types';
import styles from './MainPage.module.scss';
import cn from 'classnames'

interface MainPageProps extends DetailsDivProps { }

export const MainPage = ({ className, ...props }: MainPageProps) => {

  return (
    <div className={cn(styles.mainPage, className)} {...props}>
      <h1>MAIN</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque numquam, voluptatum temporibus nulla pariatur suscipit nostrum dignissimos asperiores saepe autem, voluptate voluptatem illo modi ut sunt omnis libero obcaecati.</p>
    </div>
  )
};


