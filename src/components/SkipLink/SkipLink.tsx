import { DetailsDivProps } from '@/types';
import styles from './SkipLink.module.scss';
import cn from 'classnames'
import { useState } from 'react';

interface SkipLinkProps extends DetailsDivProps {

}

export const SkipLink = ({ className, ...props }: SkipLinkProps) => {

  return (
    <div
      className={cn(styles.skipLink, className)}
      tabIndex={5}
      {...props}>
      go to content?
    </div>
  )

};
