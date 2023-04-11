import { DetailsFormProps } from '@/types';
import styles from './RegisterForm.module.scss';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { setUser } from '@/store/users/userSlice';
import { useRouter } from 'next/router';

interface RegisterFormProps extends DetailsFormProps { }

export const RegisterForm = ({ className, ...props }: RegisterFormProps) => {

  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const registerIn = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {

        dispatch(setUser({
          id: user.uid,
          email: user.email,
          isAuth: !!user.uid
        }))
        router.push('/')
      })
      .catch(console.error)

  }
  return (
    <Form className={styles.registerForm} handleForm={registerIn} title='Register' registerForm {...props} />
  )
};
