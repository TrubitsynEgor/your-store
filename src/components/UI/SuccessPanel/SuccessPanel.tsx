import { DetailsDivProps } from '@/types';
import styles from './SuccessPanel.module.scss';
import cn from 'classnames'
import { Button } from '../Button/Button';

interface SuccessPanelProps extends DetailsDivProps {
  closePanel: () => void
}

export const SuccessPanel = ({ closePanel, className, ...props }: SuccessPanelProps) => {

  return (
    <div className={cn(styles.successPanel, className)} {...props}>
      <h4>Success! Thank you for purchasing products from our store</h4>
      <Button aria-label='Close success alert' className={styles.btn} onClick={closePanel}>X</Button>
    </div>
  )
};
