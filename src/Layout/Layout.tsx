import { DetailsDivProps } from '@/types';
import styles from './Layout.module.scss';
import cn from 'classnames'
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

interface LayoutProps extends DetailsDivProps { }

export const Layout = ({ className, children, ...props }: LayoutProps) => {

  return (
    <div className={cn(styles.layout, className, roboto.className)} {...props}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer className={styles.footer} />
    </div>
  )
};

