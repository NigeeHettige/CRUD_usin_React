import React, { useEffect, useState } from 'react'

function App() {
  const[data,setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8081/student')
    .then(res=> res.json())
    .then(data=>setData(data))
    .catch(err => console.log(err));
  },[])
  return (
    <div>
      {data.map(d => (
        <>
           <p>{d.name}</p>
           <p>{d.email}</p>
        </>
       
      ))}
    </div>
  )
}

export default App
