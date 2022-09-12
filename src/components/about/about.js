import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul dangerouslySetInnerHTML={{ __html: text }}></ul>
    </div>
  )
}
