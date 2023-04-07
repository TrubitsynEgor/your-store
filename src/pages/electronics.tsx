import { DetailsDivProps } from '@/types';
import { Electronics } from '@/components';
import { Layout } from '@/Layout/Layout';

interface ProductsPageProps extends DetailsDivProps { }

const ElectronicsPage = ({ }: ProductsPageProps) => {
	return (
		<Layout>
			<Electronics />
		</Layout>
	)

};

export default ElectronicsPage