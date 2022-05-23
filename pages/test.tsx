import React from 'react'
import langData from '../data/langData.json'
import frameData from '../data/frameData.json'
import libraryData from '../data/libraryData.json'
import ItemCard from '../components/ItemCard'

type Props = {}

const test = (props: Props) => {
  return (
    <div>
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
            {Object.keys(frameData).map((key) => {
                return (
                    <ItemCard
                    key={key}
                    id={frameData[key].id}
                    title={frameData[key].title}
                    image={frameData[key].image}
                    category={frameData[key].category}
                    link={frameData[key].link}
                    />
                )
            })}
            {Object.keys(libraryData).map((key) => {
                return (
                    <ItemCard
                    key={key}
                    id={libraryData[key].id}
                    title={libraryData[key].title}
                    image={libraryData[key].image}
                    category={libraryData[key].category}
                    link={libraryData[key].link}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default test