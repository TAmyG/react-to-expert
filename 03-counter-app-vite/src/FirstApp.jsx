import React from 'react'
import PropTypes from 'prop-types';

export const FirstApp = ({title= "Hola a todos", subTitle, name}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Tamy Vivas',
  subTitle: 'No hay subtitulo',
}