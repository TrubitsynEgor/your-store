import { DetailsDivProps } from '@/types';
import styles from './Layout.module.scss';
import cn from 'classnames'
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Roboto_Mono } from 'next/font/google'
import { SkipLink } from '@/components';
import { useState, useRef } from 'react'
const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

interface LayoutProps extends DetailsDivProps {
}

export const Layout = ({ className, children, ...props }: LayoutProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const goToContent = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      mainRef.current?.focus()
    }
  }
  return (
    <div className={cn(styles.layout, className, roboto.className)} {...props}>
      <SkipLink
        className={cn({
          [styles.displayed]: !isVisible
        })}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        onKeyDown={(e) => goToContent(e)}
      />

      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main tabIndex={0} ref={mainRef} className={styles.main}>
        {children}
      </main>
      <Footer className={styles.footer} />
    </div>
  )
};

