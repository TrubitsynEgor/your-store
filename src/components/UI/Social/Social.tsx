import { DetailsUlProps } from '@/types';
import styles from './Social.module.scss';
import cn from 'classnames'
import { TiSocialTwitter } from 'react-icons/ti'
import { SlSocialInstagram } from 'react-icons/sl'
import { TiSocialFacebook } from 'react-icons/ti'
import { TiSocialYoutube } from 'react-icons/ti'
import Link from 'next/link';


const social = [
  { id: 1, name: 'twitter', href: 'https://twitter.com/', icon: <TiSocialTwitter /> },
  { id: 2, name: 'instagram', href: 'https://instagram.com/', icon: <SlSocialInstagram /> },
  { id: 3, name: 'facebook', href: 'https://facebook.com/', icon: <TiSocialFacebook /> },
  { id: 4, name: 'youtube', href: 'https://youtube.com/', icon: <TiSocialYoutube /> },
]

interface SocialProps extends DetailsUlProps { }

export const Social = ({ className, ...props }: SocialProps) => {

  return (
    <ul className={cn(styles.social, className)} {...props}>
      {social.map(s => (
        <li key={s.id} className={styles.item} >
          <Link href={s.href}>{s.icon}</Link>
        </li>
      ))
      }
    </ul >
  )
};
