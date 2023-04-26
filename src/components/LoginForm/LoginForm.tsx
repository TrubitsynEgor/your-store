'use client'
import { DetailsFormProps } from '@/types';
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { setUser } from '@/store/users/userSlice';
import { useState, useEffect } from 'react';
import styles from './LoginForm.module.scss'
import { useAuth } from '@/hooks/useAuth';
import { getLocalStorage } from '@/helpers/localStorege';

interface LoginFormProps extends DetailsFormProps {
  onCloseLoginModal?: () => void
  modalIsOpen?: boolean
}

export const LoginForm = ({ modalIsOpen, onCloseLoginModal, className, ...props }: LoginFormProps) => {
  const [error, setError] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const loginIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {

        dispatch(setUser({
          id: user.uid,
          email: user.email,
          isAuth: !!user.uid
        }))

      })
      .catch(() => setError(true))
  }

  useEffect(() => {
    let data = localStorage.getItem('user')
    console.log(data);
    if (data !== null) {
      data = JSON.parse(JSON.parse(data))
      console.log(data);

      dispatch(setUser(data));
    }

  }, [])



  return (
    <>
      {error && <span className={styles.error}>User not found, check data</span>}
      <Form
        className={styles.loginForm}
        modalIsOpen={modalIsOpen}
        onCloseLoginModal={onCloseLoginModal}
        handleForm={loginIn}
        title='Login' />
    </>
  )
};
