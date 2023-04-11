import { DetailsInputProps } from '@/types';
import styles from './Input.module.scss';
import cn from 'classnames'
import { Roboto_Mono } from 'next/font/google'
import { useForm } from 'react-hook-form'
const roboto = Roboto_Mono({
  weight: '500',
  subsets: ['latin'],
})

interface InputProps extends DetailsInputProps {

}

export const Input = ({ name, children, className, ...props }: InputProps) => {

  const { register, formState: { errors } } = useForm()


  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {children}
      <input
        {...register(`${name}`, {
          required: true
        })}
        className={cn(styles.input, className, roboto.className)}
        {...props} />

    </div>
  )
};
