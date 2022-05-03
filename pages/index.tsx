import type { NextPage } from 'next'
import Head from 'next/head'
import itemData from '../data/itemData.json'
import { AiOutlineGlobal, AiOutlineMobile, AiOutlineDesktop } from 'react-icons/ai'

import ItemCard from '../components/ItemCard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CodeBay</title>
        <meta name="description" content="Concept e-commerce website selling programming languages and frameworks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="index_landing">
          <div className="landing-bg">
            <h1>Develop the Future</h1>
          </div>
          <div className="landing-categ">
            <h2 className="landing-categ-head">What's your target platform?</h2>
            <div className="landing-categ-item categ-item-web">
              <AiOutlineGlobal />
              <p>Web</p>
            </div>
            <div className="landing-categ-item categ-item-mobile">
              <AiOutlineMobile />
              <p>Mobile</p>
            </div>
            <div className="landing-categ-item categ-item-desktop">
              <AiOutlineDesktop />
              <p>Desktop</p>
            </div>
          </div>
        </section>
        <section id="index_featured">
          <div className="featured-section">
            <h2>Popular Languages</h2>
            <hr />
            <ItemCard 
              title={itemData.languages[0].title}
              price={itemData.languages[0].price}
              image={itemData.languages[0].image}
            />
          </div>
          <div className="featured-section">
            <h2>Latest Frameworks</h2>
            <hr />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
