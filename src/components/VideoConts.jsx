import React, { useEffect, useState } from 'react'
import Reactplayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Loader } from './index'
import { AiFillHeart } from 'react-icons/ai'
const Asidevideo = ({ aside }) => {
  return (
    <Link to={`/video/${aside.videoId}`}>
      <img
        className="videos__img"
        src={aside.snippet?.thumbnails?.high?.url}
        alt=""
      />
      <div className="videos__desc">{aside.snippet.title}</div>
    </Link>
  )
}

// const VideoTitle = ({ title }) => {
//   return (
//     <div className="video__bottom">
//       <div className="video__title">{title.snippet?.title}</div>
//       <div className="video__data">{title.snippet?.description}</div>
//     </div>
//   )
// }

const VideoConts = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )
    // .then((data) => console.log(data.items[0]))
    fetchAPI(`search?part=snippet&relateToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videos?.length) return <Loader />
  const {
    snippet: { title, channelId, channelTitle, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <div className="video__Conts">
      <div className="container">
        <div className="youtube__video__inner">
          <div className="youtube__left">
            <div className="youtube__video">
              <Reactplayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="video__title">{title}</div>
            <div className="video__upload">{publishedAt}</div>

            <div className="video__channalId">
              <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
            </div>
            <div className="video__bottom__desc">
              <div className="video__view">조회수: {viewCount} 회</div>
              <div className="video__like">
                <AiFillHeart />
                {likeCount} 회
              </div>
            </div>
          </div>
          <div className="video__right">
            {videos.map((aside, idx) =>
              idx < 7 ? <Asidevideo key={idx} aside={aside} /> : null
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoConts
