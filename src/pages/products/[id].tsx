import { Layout } from '@/Layout/Layout'
import { getProductById, getProducts } from '@/services/productsAPI';
import { IProducts } from '@/types';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProductDetails } from '@/components'


interface Params extends ParsedUrlQuery {
	id: string
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const data = await getProducts()
	const paths = data.map((product: IProducts) => {
		return { params: { id: String(product.id) } }
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true }
	const { id } = params

	const product = await getProductById(id)

	return {
		props: { product }
	}
}

interface ProductDetailsProps {
	product: IProducts
}
const ProductDetailsPage = ({ product }: ProductDetailsProps) => {


	return (
		<Layout>
			<ProductDetails product={product} />
		</Layout>

	)

};

export default ProductDetailsPage