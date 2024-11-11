import React from 'react'
import PropTypes from "prop-types"

export const Student = (props) => {
  return (
     <div className='std'>
        <p style={{fontSize:"30px" , color:"blue"}}>Student records</p>
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Sport</th>
                <td>{props.play}</td>
            </tr>
        </table>
     </div>
  )
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    play:PropTypes.string,
}
Student.defaultProps={
    name:"No Name",
    age:0,
    play:"Not Given"
}
