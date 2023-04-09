import { DetailsDivProps } from '@/types';
import styles from './EditTextArea.module.scss';
import cn from 'classnames'
import { Button } from '../Button/Button';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';


interface EditTextAreaProps extends DetailsDivProps { }

export const EditTextArea = ({ className, ...props }: EditTextAreaProps) => {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={cn(styles.editTextArea, className)} {...props}>
      {isVisible
        ? <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setIsVisible(false)}
          onBlur={() => setIsVisible(false)}
          autoFocus
        />
        : <span>{value} <Button className={styles.btn} onClick={() => setIsVisible(true)}><FaRegEdit /></Button></span>
      }
    </div>
  )
};
