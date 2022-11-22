import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className="search">
      <div>
        <label className="glass" htmlFor="searchInput">
          <AiOutlineSearch />
        </label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="개발자 유튜버를 검색하세요!"
          title="검색"
        />
      </div>
    </div>
  )
}

export default SearchBar
