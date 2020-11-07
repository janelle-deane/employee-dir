import './TableHeader.css';
import React from 'react'

export default function TableHeader(props) {
    return (
      <tr className="TableHeader">
        <th>
        <strong>Picture</strong> 
        </th>
        <th>
          <strong>Name</strong> 
        </th>
        <th>
          <strong>Gender</strong> 
        </th>
        <th>
          <strong>Email</strong> 
        </th>
        <th>
          <strong>Phone</strong> 
        </th>
      </tr>
    
    )
}