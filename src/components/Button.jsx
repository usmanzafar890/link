import React from 'react'

const Button = ({title,color}) => {
  return (
    <button style={{backgroundColor:color , padding:10 , color:'white'}}>{title}</button>
  )
}

export default Button