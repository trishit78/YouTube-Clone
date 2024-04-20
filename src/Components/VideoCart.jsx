import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import Avatar from 'react-avatar'
import KEY from '../constants'
function VideoCart({item}) {

  const [ytIcon,setYtIcon] = useState("")

  const getYoutubeChannelName = async () =>{
    try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${KEY}`)
        //console.log(item.snippet.channelId)
        console.log(res)
        setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
  getYoutubeChannelName();
},[])




  return (
    <div className='w-94 cursor-pointer'>
        <img
        className='mt-2 w-full rounded-lg'
        src={item.snippet.thumbnails.high.url} alt="" />
        <div>
            <div className='flex items-center mt-1'>
                <Avatar
                className='rounded-full mt-1'
                src={ytIcon} alt='avatar img' size={40} />
                <div className='ml-4 mt-1'>
                <h1 className='  text-lg font-semibold '>{item.snippet.title}</h1>
                <p className='text-gray-500'>{item.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCart
