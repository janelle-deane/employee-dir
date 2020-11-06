import './EmployeeCard.css';
import React from 'react'

export default function EmployeeCard(props) {
    return (
        <div className="EmployeeCard">
        <div className="img-container">
          <img alt={props.name} src={props.picture} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.firstName} {props.firstName}
            </li>
            <li>
              <strong>Gender:</strong> {props.gender}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
          </ul>
        </div>
      </div>
    )
}
