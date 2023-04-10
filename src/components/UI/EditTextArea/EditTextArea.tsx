import { DetailsDivProps } from '@/types';
import styles from './EditTextArea.module.scss';
import cn from 'classnames'
import { Button } from '../Button/Button';
import { FaRegEdit } from 'react-icons/fa';
import { useState, useEffect } from 'react'



interface EditTextAreaProps extends DetailsDivProps { }

export const EditTextArea = ({ title, className, ...props }: EditTextAreaProps) => {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [alertIsVisible, setAlertIsVisible] = useState(false)

  return (
    <div className={cn(styles.editTextArea, className)} {...props}>
      {isVisible
        ? <textarea
          aria-label={`edit info for ${title} here`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setIsVisible(false)}
          onBlur={() => setIsVisible(false)}
          autoFocus
        />
        : <span tabIndex={0} aria-label={`Name ${value}`}>{value} <Button
          aria-label={`edit info for ${title}`}
          className={styles.btn} onClick={() => setIsVisible(true)}>
          <FaRegEdit />
        </Button></span>
      }
    </div>
  )
};
