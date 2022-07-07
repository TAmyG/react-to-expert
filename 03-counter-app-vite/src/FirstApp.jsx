import React from 'react'
import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
      {/* <h1>{title}</h1> */}
      <div data-testid="test-title">{title}</div>
      <p>{subTitle}</p>
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