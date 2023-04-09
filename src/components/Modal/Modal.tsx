import { DetailsDivProps } from '@/types';
import styles from './Modal.module.scss';
import cn from 'classnames'
import { useState } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';

interface ModalProps extends DetailsDivProps {
  toggleVisible: () => void
}

export const Modal = ({ toggleVisible, children, className, ...props }: ModalProps) => {




  return (
    <div onClick={toggleVisible} className={cn(styles.modal, className)} {...props}>
      <div onClick={(e) => e.stopPropagation()} className={cn(styles.modalContent, className)}>
        {children}
      </div>
    </div>
  )
};
