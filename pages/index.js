
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {Body}  from '../components/Body'
import anime from 'animejs'
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

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [cvData, setCVData] = useState(null)
  useEffect(()=> {
    axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=WSZC_KMZ0IC7oPxpdrndLSCtnzQH7YZSzM66P8_odB2GLmHpjh_0OdFZ3f6AssBZMal7MqklQ05-4vXCH-WKr8A18MeltVfpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnITrMInW_x-CrlMidDMOW6VP_ZSsrlV4Y4msAtB3BgUI0dV0xTy91RttiYJDD3o_q980WkxwhBH6JKYGRL86tRLgxuxm45cTw9z9Jw9Md8uu&lib=MXLKBf62im5etOFzLeUlFydKebJ9e2vsz")
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
