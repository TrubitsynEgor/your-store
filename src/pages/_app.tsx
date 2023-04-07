import { rootStore, wrapper } from '@/store/store'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rootStore);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}





