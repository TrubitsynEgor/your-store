import { DetailsFormProps } from '@/types';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';

interface LoginFormProps extends DetailsFormProps { }

export const LoginForm = ({ className, ...props }: LoginFormProps) => {

  const loginIn = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)

  }
  return (
    <Form handleForm={loginIn} title='Login' />
  )
};
