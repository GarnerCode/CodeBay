import React from 'react'
import langData from '../data/langData.json'
import frameData from '../data/frameData.json'
import libraryData from '../data/libraryData.json'
import ItemCard from '../components/ItemCard'

type Props = {}

const web = (props: Props) => {
// Figure out how to filter languages, frameworks, and libraries based on item's tags
  return (
    <div className="webPage">
        <div className="cards-container">
            {Object.keys(langData).map((key) => {
                return (
                    <ItemCard
                    key={key}
                    id={langData[key].id}
                    title={langData[key].title}
                    image={langData[key].image}
                    category={langData[key].category}
                    link={langData[key].link}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default web