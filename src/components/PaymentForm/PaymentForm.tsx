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
import { useValue } from '@/hooks/useValue';
interface PaymentFormProps extends DetailsFormProps { }

export const PaymentForm = ({ className, ...props }: PaymentFormProps) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const phone = useValue('', { isPhone: true, isEmpty: true })
  const card = useValue('', { isCard: true, isEmpty: true })
  const sms = useValue('', { isSmsCode: true, isEmpty: true })


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

      <Input onChange={phone.onChange} onBlur={phone.onBlur} value={phone.value}
        className={styles.input} type='tel' placeholder='your phone'>Phone:

        {phone.isDirty && (phone.isEmpty || phone.phoneError)
          && <div className={styles.error}>Enter a valid phone</div>}

      </Input>

      <Input onChange={card.onChange} onBlur={card.onBlur} value={card.value}
        className={styles.input} type='tel' placeholder='Bank card number'>Bank card:

        {card.isDirty && (card.isEmpty || card.cardError)
          && <div className={styles.error2}>Enter a valid card number(without spaces)</div>}

      </Input>

      <Button disabled={!phone.inputValid || !card.inputValid}
        type='button' className={styles.btn} onClick={toggleModalVisible}>Pay up</Button>

      {isModalVisible && <Modal className={styles.modal} toggleVisible={toggleModalVisible} >
        <Input onChange={sms.onChange} onBlur={sms.onBlur} value={sms.value}
          className={styles.modalInput} type='text' placeholder='enter sms-code'>Enter sms-code:

          {sms.isDirty && (sms.isEmpty || sms.smsError)
            && <div className={styles.error}>Enter a valid sms-code</div>}

        </Input>
        <Button disabled={!sms.inputValid}
          type='button' className={styles.modalBtn} onClick={puyUp}>Pay up</Button>
      </Modal>}

      {isSuccess && <SuccessPanel role='alert' closePanel={() => setIsSuccess(false)} />}
    </form>
  )
};
