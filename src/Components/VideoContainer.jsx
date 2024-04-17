import React, { useEffect,useState } from 'react' 

import {YOUTUBE_VIDEO_API} from '../../src/constants'
import KEY from '../../src/constants'

import axios from 'axios'
import VideoCart from './VideoCart'
function VideoContainer() {

    const [video,setVideo] = useState([])

    const fetchVideo = async () =>{
        try {
            const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
        console.log(res?.data?.items)
            setVideo(res?.data?.items)
        } catch (error) {
            console.log(error.message)
        }
        
    }
    useEffect(()=>{
        fetchVideo()
    },[])



  return (
    <div className='grid grid-cols-3 gap-3 '>
        {
            video.map((item)=>{
                return(

                    <VideoCart key={item.id} item={item}/>
                    )
            })
        }
    </div>
  )
}

export default VideoContainer
