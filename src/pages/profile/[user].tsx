import { Layout } from '@/Layout/Layout';
import { Profile } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';


const ProfilePage = () => {

	const user = useAuth()
	const username = user?.email.split('@')[0]


	return (
		<Layout>
			{user && <Profile user={user} username={username} />}
		</Layout>
	)

};

export default ProfilePage