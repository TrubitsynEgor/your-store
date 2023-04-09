import { AppState } from '@/store/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
	const { users } = useSelector((state: AppState) => state.users)

}