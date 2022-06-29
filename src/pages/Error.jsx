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
          <button style={{
            borderRadius: "5px"}}>
          <Link to="/" style={{
            fontSize: "1.5rem",
            color: "black",
            padding: 10 }} >Homepage</Link>
          </button>
          
          </section>
    </>
  )
}

export default Error