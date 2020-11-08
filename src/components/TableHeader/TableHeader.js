import './TableHeader.css';
import React from 'react'

export default function TableHeader() {
    return (
      <thead className="TableHeader">
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
      </thead>
    
    )
}