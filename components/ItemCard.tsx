import React from 'react'
import Link from 'next/link'

type Props = {id: string, title: string, image: string, category: string}

const ItemCard = (props: Props) => {

  return (
    <Link href={`/` + props.id}>
      <div className="ItemCard">
        <img className="item-card-img" src={'/images/itemImages/' + props.image} alt="" />
        <p className="item-card-title">{props.title}</p>
        <p className="item-card-category">{props.category}</p>
      </div>
    </Link>
  )
}

export default ItemCard