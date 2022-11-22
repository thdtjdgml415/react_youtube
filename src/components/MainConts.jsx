import React, { useState, useEffect } from 'react'

import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from './index'

const MainConts = () => {
  const [selectCategory, setselectCategory] = useState('react')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [selectCategory])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setselectCategory={setselectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 유튜버
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
