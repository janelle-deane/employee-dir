import './EmployeeCard.css';
import React from 'react'

export default function EmployeeCard(props) {
  return (
      <tr className="EmployeeCard">
        <td>
          <img alt={props.name} src={props.picture} />
        </td>
        <td>
           {props.firstName} {props.lastName}
        </td>
        <td>
           {props.gender}
        </td>
        <td>
           {props.email}
        </td>
        <td>
           {props.phone}
        </td>
      </tr>
  )
}
