import { useState,useEffect } from "react";
import React from "react";
const url = 'https://api.github.com/users'
import './index.css'


const CodeExample = () =>{

const [users,setUsers] = useState([])


useEffect(()=>{
  const fetchData = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
  }
  fetchData()
},[])

return <section>
 <h5>CRYPT USERS</h5>
 <ul className="users">
  {users.map((user)=>{
    const {id,login,avatar_url,html_url}=user
    return<li key={id}>
      <img src={avatar_url} alt={login} />
      <div>
        <a href={html_url}>profile</a>
        <h3>{login}</h3>
      </div>
    </li>
  })}
 </ul>
</section>

}












































//   const [name,setName] = useState({name:'tike',age:20,country:'Nigeria'})

// const codeModification = ()=>{
//     setName({...name,age:30})
//   }

//    return (
//     <div>
//       <h2> {name.name}</h2>
//       <h2> {name.country}</h2>
//       <h2> {name.age}</h2>
//     <button type="button" style={{backgroundColor:'blue'}} onClick={codeModification}>click me</button> 
//     </div>

//   )


export default CodeExample
