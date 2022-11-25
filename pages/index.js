import { useEffect, useState } from 'react'
import axios from 'axios'
import {Body}  from '../components/Body'
// TODO: add multiple language support
// TODO: fix text overlapping
// TODO: center vertically left side column contet
// TODO: improve query function of the googlesheet api
// TODO: add .env file to secure api key
function OnLoadPage(){
  // TODO: add animation on loading
  useEffect(()=>{
   
  },[])
  return(
    <div className="col col-12 text-center p-4">
        
    
    </div>
  
  );
}

export default function Home(props) {

  const [isLoaded, setIsLoaded] = useState(false)
  const [cvData, setCVData] = useState(null)
  useEffect(()=> {
    axios.get(props.url)
            .then((response) => {
                if(response.status){
                  setIsLoaded(true)
                  setCVData(response.data)
                }
            })
            .catch((err) => console.log(err))
    
  },[])

  return (
    <div className='container'>
      {
        isLoaded ? <Body cvData={cvData}/> : <OnLoadPage/>
      }
    
    </div>
  )
}

export async function getServerSideProps(){
  console.log(process.env.URL)
  return {
    props:{
      url: process.env.URL
    }
  }
}