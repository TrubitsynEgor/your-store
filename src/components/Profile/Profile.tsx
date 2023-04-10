import { DetailsDivProps, IUser } from '@/types';
import styles from './Profile.module.scss';
import cn from 'classnames'
import { EditInput } from '../UI/EditInput/EditInput';
import { EditTextArea } from '../UI/EditTextArea/EditTextArea';
import { ImExit } from 'react-icons/im'
import { Button } from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { removeUser } from '@/store/users/userSlice';
import { useRouter } from 'next/router';


interface ProfileProps extends DetailsDivProps {
  user: IUser
  username?: string
}

export const Profile = ({ username, user, className, ...props }: ProfileProps) => {

  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const getData = (e: React.FormEvent) => {
    e.preventDefault
    console.log(e.target)
  }
  const logOut = () => {
    dispatch(removeUser())
    router.push('/')
  }

  return (
    <div className={cn(styles.profile, className)} {...props}>
      <div className={styles.headWrapper}>
        <h1 className={styles.title}>{username}</h1>
        <Button className={styles.btn}
          onClick={logOut}
        >
          <ImExit />
        </Button>
      </div>
      <form onSubmit={(e) => getData(e)}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.caption}>Mail:</span> {user.email}
          </li>
          <li className={styles.item}>
            <span className={styles.caption}>Name:</span> <EditInput title='name' />
          </li>
          <li className={styles.item}>
            <span className={styles.caption}>Last name:</span> <EditInput title='Last name' />
          </li>
          <li className={styles.item}>
            <span className={styles.caption}> Company:</span> <EditInput title='Company' />
          </li>
          <li className={styles.item}>
            <span className={styles.caption}>About myself:</span> <EditTextArea title='>About myself' />
          </li>

        </ul>
      </form>
    </div>
  )
};
