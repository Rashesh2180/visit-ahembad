import React from 'react'

const LocationMap = () => {
  return (
    <div className='bg-[#5B767B] w-full py-10'>
     <div className='main-container sm:h-96 h-60'>
     <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019234450224!2d-122.41941668468165!3d37.77492977975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c5d6c5fb%3A0x6a6f3c2f7e6f5b6f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1615809718894!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
     </div>
      
    </div>
  )
}

export default LocationMap
