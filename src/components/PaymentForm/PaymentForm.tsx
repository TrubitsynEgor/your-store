import { DetailsFormProps } from '@/types';
import styles from './PaymentForm.module.scss';
import cn from 'classnames'
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { useState } from 'react'
import { Modal } from '../Modal/Modal';
import { SuccessPanel } from '../UI/SuccessPanel/SuccessPanel';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { clearCart } from '@/store/products/products.slice';
interface PaymentFormProps extends DetailsFormProps { }

export const PaymentForm = ({ className, ...props }: PaymentFormProps) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const puyUp = () => {
    setIsModalVisible(false)
    setIsSuccess(true)
    dispatch(clearCart())
  }

  const toggleModalVisible = () => {
    setIsModalVisible(prev => !prev)
  }
  return (
    <form className={cn(styles.paymentForm, className)} {...props}>
      <Input className={styles.input} type='tel' placeholder='your phone'>Phone: </Input>
      <Input className={styles.input} type='tel' placeholder='Bank card number'>Bank card: </Input>
      <Button type='button' className={styles.btn} onClick={toggleModalVisible}>Pay up</Button>

      {isModalVisible && <Modal className={styles.modal} toggleVisible={toggleModalVisible} >
        <Input className={styles.modalInput} type='text' placeholder='enter sms-code'>Enter sms-code: </Input>
        <Button type='button' className={styles.modalBtn} onClick={puyUp}>Pay up</Button>
      </Modal>}

      {isSuccess && <SuccessPanel role='alert' closePanel={() => setIsSuccess(false)} />}
    </form>
  )
};
