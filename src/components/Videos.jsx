import React from 'react'
import { VideoCard, Loader } from './index'

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader /> //배열이 안들어오면로딩소스 출력 (?를 사용하면 에러가 뜨지 않음)

  return (
    <article className="videos__inner">
      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item} />
      ))}
    </article>
  )
}

export default Videos
