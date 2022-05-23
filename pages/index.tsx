import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import langData from '../data/langData.json'
import frameData from '../data/frameData.json'
import { AiOutlineGlobal, AiOutlineMobile, AiOutlineDesktop } from 'react-icons/ai'

import ItemCard from '../components/ItemCard'

// When designing item images, set size to 800x600px, icon image height to 442px, maintaining dimensions.

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
            <Link href="/test">
              <div className="landing-categ-item categ-item-web">
                <AiOutlineGlobal />
                <p>Front End</p>
              </div>
            </Link>
            <Link href="/backend">
              <div className="landing-categ-item categ-item-desktop">
                <AiOutlineDesktop />
                <p>Back End</p>
              </div>
            </Link>
          </div>
        </section>
        <section id="index_featured">
          <div className="featured-section">
            <h2 className="featured-head">Popular Languages</h2>
            <div className="cards-container">
              <ItemCard
              id={langData.javascript.id}
                title={langData.javascript.title}
                image={langData.javascript.image}
                category={langData.javascript.category}
                link={langData.javascript.link}
              />
              <ItemCard
              id={langData.html.id}
                title={langData.html.title}
                image={langData.html.image}
                category={langData.html.category}
                link={langData.html.link}
              />
              <ItemCard
              id={langData.python.id}
                title={langData.python.title}
                image={langData.python.image}
                category={langData.python.category}
                link={langData.python.link}
              />
            </div>
          </div>
          <div className="featured-section">
            <h2 className="featured-head">Latest Frameworks</h2>
            <div className="cards-container">
              <ItemCard
              id={frameData.angular.id}
                title={frameData.angular.title}
                image={frameData.angular.image}
                category={frameData.angular.category}
              />
              <ItemCard
              id={frameData.flutter.id}
                title={frameData.flutter.title}
                image={frameData.flutter.image}
                category={frameData.flutter.category}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
