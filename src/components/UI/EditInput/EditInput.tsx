import { DetailsDivProps } from '@/types';
import styles from './EditInput.module.scss';
import cn from 'classnames'
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react'
interface EditInputProps extends DetailsDivProps { }

export const EditInput = ({ title, className, ...props }: EditInputProps) => {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [alert, setAlert] = useState('')

  const handleInputOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsVisible(false)
      setAlert(`field ${title} changed`)
    }
  }

  return (
    <div className={cn(styles.editInput, className)} {...props}>
      {isVisible
        ? <Input
          aria-label={`edit info for ${title} here`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => handleInputOnKeyDown(e)}
          onBlur={() => setIsVisible(false)}
          autoFocus
        />
        : <span tabIndex={0} aria-label={`Name ${value}`}>{value} <Button
          aria-label={`edit info for ${title}`}
          type='submit'
          className={styles.btn}
          onClick={() => setIsVisible(true)}>
          <FaRegEdit />
        </Button>
        </span>
      }

    </div>
  )
};
