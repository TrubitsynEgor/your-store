import { DetailsDivProps, IUser } from '@/types';
import styles from './Profile.module.scss';
import cn from 'classnames'
import { EditInput } from '../UI/EditInput/EditInput';
import { EditTextArea } from '../UI/EditTextArea/EditTextArea';


interface ProfileProps extends DetailsDivProps {
  user: IUser
  username?: string
}

export const Profile = ({ username, user, className, ...props }: ProfileProps) => {


  const getData = (e: React.FormEvent) => {
    e.preventDefault
    console.log(e.target)
  }

  return (
    <div className={cn(styles.profile, className)} {...props}>
      <h1 className={styles.title}>{username}</h1>
      <form onSubmit={(e) => getData(e)}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.caption}>Mail:</span> {user.email}
          </li>
          <li className={styles.item}>
            <span className={styles.caption}>Name:</span> <EditInput />
          </li>
          <li className={styles.item}>
            <span className={styles.caption}>Last name:</span> <EditInput />
          </li>
          <li className={styles.item}>
            <span className={styles.caption}> Company:</span> <EditInput />
          </li>
          <li className={styles.item}>
            <span className={styles.caption}>About myself:</span> <EditTextArea />
          </li>

        </ul>
      </form>
    </div>
  )
};
