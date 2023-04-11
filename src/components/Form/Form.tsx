import { DetailsFormProps } from '@/types';
import styles from './Form.module.scss';
import cn from 'classnames'
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Link from 'next/link';
import { useValue } from '@/hooks/useValue';


interface FormProps extends DetailsFormProps {
  handleForm: (email: string, password: string) => void
  registerForm?: boolean
  onCloseLoginModal?: () => void
  modalIsOpen?: boolean
}


export const Form = ({
  modalIsOpen, onCloseLoginModal, registerForm = false, title, handleForm, className, ...props }: FormProps) => {

  const email = useValue('', { isEmpty: true, minLength: 3, isEmail: true })
  const password = useValue('', { isEmpty: true, minLength: 6 })

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const setUserOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleForm(email.value, password.value)
    if (modalIsOpen) onCloseLoginModal!()
  }

  return (
    <form onSubmit={setUserOnSubmit} className={cn(styles.form, className)} {...props}>
      <Input
        name='email'
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        className={styles.input}
        placeholder='Email'
        type='email'>
        {email.isDirty && (email.isEmpty || email.minLengthError || email.emailError)
          && <div className={styles.error}>Value is invalid</div>}
      </Input>

      <Input
        name='password'
        value={password.value}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        className={styles.input}
        placeholder='Password'
        type={isVisible ? 'text' : 'password'} >

        <Button aria-label={!isVisible ? 'Visible password, no is hide' : 'visible password, now is visible'}
          type='button' onClick={() => setIsVisible((prev) => !prev)}
          className={styles.eye}>
          {!isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Button>

        {password.isDirty && (password.isEmpty || password.minLengthError)
          && <div className={styles.error}>Value is invalid</div>}
      </Input>



      <div className={styles.btnBox}>

        <Button
          disabled={!email.inputValid || !password.inputValid}
          className={styles.btn}
          type='submit'>
          {title}
        </Button>

        {!registerForm && <Link href='/register'>or Register</Link>}
        {registerForm && <Link className={styles.link} href='/'>or Login</Link>}
      </div>

    </form>
  )
};
