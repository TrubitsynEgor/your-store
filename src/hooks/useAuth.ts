import { AppState } from '@/store/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
	const { user } = useSelector((state: AppState) => state.users)
	return user
}