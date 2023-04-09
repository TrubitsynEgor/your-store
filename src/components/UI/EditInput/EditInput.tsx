import { DetailsDivProps } from '@/types';
import styles from './EditInput.module.scss';
import cn from 'classnames'
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react'
interface EditInputProps extends DetailsDivProps { }

export const EditInput = ({ className, ...props }: EditInputProps) => {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)


  return (
    <div className={cn(styles.editInput, className)} {...props}>
      {isVisible
        ? <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setIsVisible(false)}
          onBlur={() => setIsVisible(false)}
          autoFocus
        />
        : <span>{value} <Button type='submit' className={styles.btn} onClick={() => setIsVisible(true)}><FaRegEdit /></Button></span>
      }
    </div>
  )
};
