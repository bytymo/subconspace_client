import React from 'react'

const Thankyou = () => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <p className='display-6 d-block w-100 mt-5'>Thank you for booking. We look forward to meeting with you!</p>
      <p className="lead">In the meantime, I encourage you to check out our YouTube and Instagram pages for some mindfulness tips and meditation segments. Here is a sample meditation to boost your mood for the day. Namaste.</p>
      <p className="lead"><a href="/" style={{textDecoration: 'none'}}><i class="fas fa-chevron-left"></i> Go back to Homepage</a></p>
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
      }}>
        <iframe style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src="https://www.youtube.com/embed/80iL6vBuIxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Thankyou
