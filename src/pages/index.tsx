import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        Bem Vindo!!
        <button className={'button is-dark'}>Button</button>

    </div>
  )
}

export default Home
