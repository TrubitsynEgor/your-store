import { DetailsDivProps } from '@/types';
import { Layout } from '@/Layout/Layout';
import { Cart } from '@/components/Cart/Cart';

interface ProductsPageProps extends DetailsDivProps { }

const CartPage = ({ }: ProductsPageProps) => {

	return (
		<Layout>
			<Cart />
		</Layout>
	)

};

export default CartPage