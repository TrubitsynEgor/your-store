import { DetailsFormProps } from '@/types';
import styles from './Form.module.scss';
import cn from 'classnames'
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Link from 'next/link';

interface FormProps extends DetailsFormProps {
  handleForm: (e: React.FormEvent, email: string, password: string) => void
  register?: boolean
  onCloseLoginModal?: () => void
  modalIsOpen?: boolean
}

export const Form = ({ modalIsOpen, onCloseLoginModal, register = false, title, handleForm, className, ...props }: FormProps) => {

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const setUserOnSubmit = (e: React.FormEvent) => {
    handleForm(e, email, password)
    if (modalIsOpen) onCloseLoginModal!()
  }

  return (
    <form onSubmit={(e) => setUserOnSubmit(e)} className={cn(styles.form, className)} {...props}>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        placeholder='Email'
        type='email' />

      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        placeholder='Password'
        type={isVisible ? 'text' : 'password'} >

        <Button aria-label={!isVisible ? 'Visible password, no is hide' : 'visible password, now is visible'}
          type='button' onClick={() => setIsVisible((prev) => !prev)}
          className={styles.eye}>
          {!isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Button>
      </Input>
      <div className={styles.btnBox}>
        <Button className={styles.btn} type='submit'>{title}</Button>
        {!register && <Link href='/register'>or Register</Link>}
        {register && <Link className={styles.link} href='/'>or Login</Link>}
      </div>

    </form>
  )
};
