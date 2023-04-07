import { DetailsDivProps } from '@/types';
import { Products } from '@/components';
import { Layout } from '@/Layout/Layout';

interface ProductsPageProps extends DetailsDivProps { }

const ProductsPage = ({ }: ProductsPageProps) => {
	return (
		<Layout>
			<Products />
		</Layout>
	)

};

export default ProductsPage
