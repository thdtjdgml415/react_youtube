import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { SearchBar } from './index'
import { Link } from 'react-router-dom'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="logo_icon" /> Dev Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
