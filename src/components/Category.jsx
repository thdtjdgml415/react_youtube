import React from 'react'

import { categories } from '../utils/content'

const Category = ({ selectCategory, setselectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#f2f2' : 'transparent',
          }}
          key={category.name}
          onClick={() => setselectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
          <span></span>
        </button>
      ))}
    </div>
  )
}

export default Category
