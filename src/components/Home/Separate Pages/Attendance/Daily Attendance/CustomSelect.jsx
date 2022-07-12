import React from 'react'

function CustomSelect(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} id={props.name} onChange={props.onChange}>
        {props.options?.map((option) => {
          return <option value={option.value}>{option.name}</option>
        })}
      </select>
    </div>
  )
}

export default CustomSelect