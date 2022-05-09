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
        <meta name="description" content="Passion project providing information on popular programming languages, frameworks, and libraries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="index_landing">
          <div className="landing-bg">
            <h1 className="landing-head">Develop the Future</h1>
          </div>
          <div className="landing-categ">
            <h2 className="landing-categ-head">Choose your platform</h2>
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
              title={itemData.html.title}
              image={itemData.html.image}
              category={itemData.html.category}
            />
            <ItemCard // JavaScript
              title={itemData.javascript.title}
              image={itemData.javascript.image}
              category={itemData.javascript.category}
            />
            <ItemCard // Python
              title={itemData.python.title}
              image={itemData.python.image}
              category={itemData.python.category}
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
