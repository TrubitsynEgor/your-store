import { PaymentForm } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { Layout } from '@/Layout/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

const PaymentPage = () => {
	const user = useAuth()
	const router = useRouter()

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!user?.isAuth) {
				router.push('/')
			}
		}, 100);

		return () => {
			clearTimeout(timeout)
		}
	}, [])


	return (
		<Layout>
			<PaymentForm />
		</Layout>
	)

};

export default PaymentPage