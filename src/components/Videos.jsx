import React from 'react'

function Videos() {
  const videos = [
    { src: '/Video/video.mp4', caption: 'Workshop clip 1' },
    { src: '/Video/video1.mp4', caption: 'Workshop clip 2' },
    { src: '/Video/video2.mp4', caption: 'Workshop clip 3' },
    { src: '/Video/video3.mp4', caption: 'Workshop clip 4' },
    { src: '/Video/video4.mp4', caption: 'Workshop clip 5' },
    { src: '/Video/video5.mp4', caption: 'Workshop clip 6' },
  ]

  return (
    <section id="videos" className="section alt" aria-label="Videos">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <img className="section-logo" src="/images/logo.png" alt="" loading="lazy" data-logo />
            <div>
              <h2>Videos</h2>
              <p className="muted">Watch short clips of our work process and finished pieces.</p>
            </div>
          </div>
        </div>

        <div className="video-grid" aria-label="Video gallery">
          {videos.map((video, idx) => (
            <figure key={idx} className="video-card">
              <video controls preload="metadata" playsinline src={video.src}></video>
              <figcaption className="muted">{video.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
