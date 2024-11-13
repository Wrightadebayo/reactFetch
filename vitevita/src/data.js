// import { useEffect, useState } from "react"

// import { useState } from "react";
// https://api.github.com/users




// export const data= [
//   {id:2,name:'Tosin'},
//    {id:2,name:'Tosin'},
//     {id:2,name:'Tosin'}
// ]


// In React, useEffect is a hook (a special function) that lets you run side effects in your functional components. Side effects are any actions that affect something outside of the function or component itself, like fetching data, setting up a subscription, or manually changing the DOM.



// const fetchdata=()=>{
// const [users,setUsers] = useState([])
// const [isLoading,setisLoading] = useState('true)
//  const [isError,setisError] = useState('false')

// useEffect(()=>{
//   const fetchdata = async ()=>{
//     try {
//       const response = await fetch(url)
//     const data = await response.json()
//     setUsers(data)
//     } catch (error) {
//       console.log(error)
//     }
    
//   }
//   fetchdata()
// },[])

// if(isLoading){
//   return <h3>Loading...</h3>
// }
// if(isError){
//   return <h2>error...</h2>
// }

// return <section>
//   <h1>isreal users</h1>
{/* <ul>users.map((user)=>{
  const {id,login,avatar_url,html_url}=user
return <li key={id}>
<img src={avatar_url} alt={login}/>
  <a href={html_url}>profile</a>
</li>
})
</ul>
  
// </section> */}