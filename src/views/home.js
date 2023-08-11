import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Silver Angelic Beaver</title>
        <meta property="og:title" content="Silver Angelic Beaver" />
      </Helmet>
      <a
        href="https://soloreadit.com/short/81472?stream_uuid=b5877ef5-23df-415f-8ace-5bba2b138837&amp;trek=1"
        className="home-link"
      >
        <img alt="image" src="/bg_butt-400h.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
