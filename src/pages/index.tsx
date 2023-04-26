import { Layout } from '@/Layout/Layout'
import { Products } from '@/components'
import { setLocalStorage } from '@/helpers/localStorege'
import { DetailsDivProps } from '@/types'
import Head from 'next/head'
import { useEffect } from 'react'



export default function Home() {




  return (
    <>
      <Head>
        <title>Your-store - the best store for you</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout >
        <Products />
      </Layout>


    </>
  )
}


