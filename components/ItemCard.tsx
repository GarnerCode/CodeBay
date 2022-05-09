import React from 'react'

type Props = {title: string, image: string, category: string}

const ItemCard = (props: Props) => {
  return (
    <div className="ItemCard">
        <img className="item-card-img" src={'/images/itemImages/' + props.image} alt="" />
        <p className="item-card-title">{props.title}</p>
        <p className="item-card-category">{props.category}</p>
    </div>
  )
}

export default ItemCard