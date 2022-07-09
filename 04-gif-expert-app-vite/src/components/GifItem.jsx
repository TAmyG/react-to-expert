import React from 'react'

/**
 * 1. colocar <li>
 * 2. crear componente
 * @param {title, id, url} param0 
 * @returns 
 */
export const GifItem = ({title, id, url}) => {
  return (
    // <li >{title}</li>
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
