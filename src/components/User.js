import React, { useState } from 'react'

const User = (props) => {
    const[count, setCount] = useState(0);
  return (
    <div className='user-card'>
        <h1>count: {count}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Gwalior</h3>
        <h4>Contact: rgarg6272</h4>
        <button onClick={() => setCount(count+1)}>Increment</button>
      
    </div>
  )
}

export default User
