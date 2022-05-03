import React from 'react'

type Props = {title: string, price: number, image: string}

const ItemCard = (props: Props) => {
  return (
    <div className="ItemCard">
        <img className="item-card-img" src={'/images/itemImages/' + props.image} alt="" />
        <p className="item-card-title">{props.title}</p>
        <p className="item-card-price">{props.price}</p>
    </div>
  )
}

export default ItemCard