import React from 'react'
import { useRouter } from 'next/router'
import langData from '../data/langData.json'

type Props = {}

const Item = (props: Props) => {
    const router = useRouter();
    const itemId: string = router.query.itemId;
  return (
    <div className="itemPage">
      <h1>{langData[itemId].title}</h1>
      <h2>{langData[itemId].category}</h2>
      <p>{langData[itemId].desc}</p>
    </div>
  )
}

export default Item