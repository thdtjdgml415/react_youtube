import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

import { Videos } from './'

const ChannelConts = () => {
  const [channelDetail, setchannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet, &id=${id}`)

      setchannelDetail(data?.items[0])
      // console.log(data?.items[0])

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=data`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])

  return (
    <section id="channelConts">
      <div className="channel__header">
        <img
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt=""
        />
      </div>
      <div className="channel__info">
        <img src={channelDetail?.snippet?.thumbnails?.medium?.url} alt="" />
        <h3>{channelDetail?.snippet?.title}</h3>
        <span className="view__count">
          구독자수 : {channelDetail?.statistics?.subscriberCount}명
        </span>
        <span className="video__count">
          비디오 수 : {channelDetail?.statistics?.videoCount}개
        </span>
        <span className="video__allcount">
          전체 조회수 : {channelDetail?.statistics?.viewCount}
        </span>
      </div>
      <div className="channel__videos">
        <Videos />
      </div>
    </section>
  )
}

export default ChannelConts
