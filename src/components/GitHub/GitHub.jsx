import React,{ useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data = useLoaderData()

  //   const [data,setData] = useState([])

  //   useEffect(() => {
  //       fetch('https://api.github.com/users/shyamkolge')
  //       .then((res)=>res.json())
  //       .then((data)=>{
  //           console.log(data);
  //           setData(data)
  //       })
  //  }, [])
   
    
  return (
    <div className='text-center m-4 bg-gray-700 text-white'>

    <img className="p-8" src={data.avatar_url} alt="Git Picture" width={200}/>
    <h1 className='text-4xl'>GitHub Followers : {data.followers}</h1>  
        
    </div>
  )
}

export default GitHub

export const GitHubInfo = async ()=>{

    const responce = await fetch('https://api.github.com/users/shyamkolge')
    
    return responce.json()


}

