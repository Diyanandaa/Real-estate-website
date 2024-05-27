import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}
export default Heading
/*This renders the title prop inside an h1 element, displaying the main heading text.
<p>{subtitle}</p>: This renders the subtitle prop inside a p element, displaying the subheading text.*/