import { DetailsFormProps } from '@/types';
import styles from './RegisterForm.module.scss';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';

interface RegisterFormProps extends DetailsFormProps { }

export const RegisterForm = ({ className, ...props }: RegisterFormProps) => {

  const registerIn = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)

  }
  return (
    <Form handleForm={registerIn} title='Register' register />
  )
};
