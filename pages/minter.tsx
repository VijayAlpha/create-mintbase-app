import Head from 'next/head'
import Hero from '../components/Hero'
import Container from '../components/Layout/Container'

import Minter from './../components/Minter';

const Mint = () => {
  return (
    <>
      <Head>
        <title>Mintbase Engineering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />

      <Container className="flex justify-center my-24">
        <Minter/>
      </Container>
    </>
  )
}

export default Mint;
