import Layout from "components/Layout";
import { NextSeo } from "next-seo";
import '../styles/globals.css'

export default function Home() {
  return (
    <Layout title="Entendendo o jogo">
        <NextSeo
        title="Entendendo o jogo"
        description="texto"
        />
      <p className='text-red-600'>valor</p>


    </Layout>
  );
}
