import React from 'react'
import { useParams } from 'react-router-dom'
export default function Hello() {
  let { name } = useParams()
  return (
    <div>
      <h1>Hello{ name ? ', ' + name : '' }</h1>
    </div>
  );
}
