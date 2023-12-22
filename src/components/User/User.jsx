import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()

  return (
    <div className='text-center py-12 text-orange-700 text-4xl font-boldq
    '>User: {userid}</div>
  )
}

export default User