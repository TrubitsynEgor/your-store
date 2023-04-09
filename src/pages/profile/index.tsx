import { Layout } from '@/Layout/Layout';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';


const Profile = () => {

	const user = useAuth()
	const username = user?.email.split('@')[0]
	const router = useRouter()

	useEffect(() => {
		const timeout = setTimeout(() => {
			router.push(`/profile/${username}`)
		}, 100);

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<Layout>

		</Layout>
	)

};

export default Profile