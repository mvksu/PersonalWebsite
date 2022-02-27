import React from 'react'
import images from "../../constants/images"

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
    </nav>
  )
}
