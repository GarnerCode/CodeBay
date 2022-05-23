import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import langData from '../data/langData.json'
import frameData from '../data/frameData.json'
import libraryData from '../data/libraryData.json'

type Props = {}

const Item = (props: Props) => {

  const router = useRouter();
  const itemId = router.query.itemId;

  let dataSource: object;

  for (let i = 0; i <= Object.keys(langData).length; i++) {
    if (itemId == Object.keys(langData)[i]) {
      dataSource = langData;
      break;
    } else {
      for (let i = 0; i <= Object.keys(frameData).length; i++) {
        if (itemId == Object.keys(frameData)[i]) {
          dataSource = frameData;
          break;
        } else {
          for (let i = 0; i <= Object.keys(libraryData).length; i++) {
            if (itemId == Object.keys(frameData)[i]) {
              dataSource = libraryData;
              break;
            }
          }
        }
      }
    }
  }

  return (
    <div className="itemPage">
      <Head>
        <title>CodeBay | {dataSource[itemId].title}</title>
        <meta name="description" content="Passion project providing information on popular programming languages, frameworks, and libraries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img className="item-page-img" src={'/images/itemImages/' + dataSource[itemId].image} alt="" />
      <div className="item-page-text">
        <h1 className="item-page-title">{dataSource[itemId].title}</h1>
        <p className="item-page-category">{dataSource[itemId].category}</p>
        <p className="item-page-desc">{dataSource[itemId].desc}</p>
        <a href={dataSource[itemId].link} target="_blank">Learn More!</a>
      </div>
    </div>
  )
}

export default Item