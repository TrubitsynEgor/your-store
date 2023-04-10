import { DetailsFormProps } from '@/types';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { setUser } from '@/store/users/userSlice';

interface LoginFormProps extends DetailsFormProps {
  onCloseLoginModal: () => void
  modalIsOpen: boolean
}

export const LoginForm = ({ modalIsOpen, onCloseLoginModal, className, ...props }: LoginFormProps) => {

  const dispatch = useDispatch<AppDispatch>()

  const loginIn = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {

        dispatch(setUser({
          id: user.uid,
          email: user.email,
          isAuth: !!user.uid
        }))

      })
      .catch(() => alert('Invalid USER!'))

  }
  return (
    <Form modalIsOpen={modalIsOpen} onCloseLoginModal={onCloseLoginModal} handleForm={loginIn} title='Login' />
  )
};
