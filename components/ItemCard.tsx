import React from 'react'

type Props = {title: string, price: number, image: string}

const ItemCard = (props: Props) => {
  return (
    <div className="ItemCard">
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default ItemCard