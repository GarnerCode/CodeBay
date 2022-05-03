import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="Navbar">
        <p className="nav-brand">CodeBay</p>
        <ul>
            <li>Languages</li>
            <li>Frameworks</li>
            <li>Libraries</li>
        </ul>
    </div>
  )
}

export default Navbar