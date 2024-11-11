
import React from 'react'
import PropTypes from "prop-types"

export const Child = (props) => {
  return <div>{props.children}</div>
  
}

Child.PropTypes ={
    children:PropTypes.array,
};