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
            <h1 className="landing-head">Develop the Future</h1>
          </div>
          <div className="landing-categ">
            <h2 className="landing-categ-head">What do you want to build?</h2>
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
            <h2 className="featured-head">Popular Languages</h2>
            <ItemCard // HTML
              title={itemData.languages[0].title}
              price={itemData.languages[0].price}
              image={itemData.languages[0].image}
            />
            <ItemCard // JavaScript
              title={itemData.languages[2].title}
              price={itemData.languages[2].price}
              image={itemData.languages[2].image}
            />
            <ItemCard // Python
              title={itemData.languages[3].title}
              price={itemData.languages[3].price}
              image={itemData.languages[3].image}
            />
          </div>
          <div className="featured-section">
            <h2 className="featured-head">Latest Frameworks</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
