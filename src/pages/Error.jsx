import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
        <section className="error" style={{

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
          <h1>Error 404. Page Not Found</h1>
          <br />
          
          <Link to="/" className="error-btn" style={{color:"black"}}>Go to Homepage</Link>
         
          
          </section>
    </>
  )
}

export default Error