import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import KEY from "../constants";
import Avatar from 'react-avatar';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";


function Watch() {

    const [singleVideo,setSingleVideo] = useState("")
    const [searchParams]= useSearchParams()
    const videoId = searchParams.get('v');
    //console.log('video id =',videoId)

    const getSingleVideo = async ()=>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${KEY}`);
           console.log(res?.data?.items[0])
            console.log(res?.data?.items[0]?.snippet?.thumbnails.high.url)
            setSingleVideo(res?.data?.items[0])
           
            
        } catch (error) {
            console.log(error)
        }
    }


useEffect(()=>{
    getSingleVideo();
},[])



    return (
    <div className= "flex   ml-4 w-[700px]">
        <div >
        <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold text-xl mt-2">{singleVideo?.snippet?.title}</h1>
     
     
     
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-between w-[30%]">
            <div className="flex mr-4">
                <Avatar 
                size="45"
                className="rounded-full mr-4"
                src={singleVideo?.snippet?.thumbnails.high.url} />
                <h1 className="font-bold ">{singleVideo?.snippet?.channelTitle}</h1>

            </div>
            <button className="px-4 py-1 font-medium bg-black text-white rounded-full">Subscribe</button>
        </div>
            <div className="flex space-x-2">

            <div className=" flex space-x-4 bg-gray-200 cursor-pointer items-center px-2 py-2 rounded-xl"> 
            <div className="flex items-center">

            <AiOutlineLike size={20} />
            <p className="ml-2">{singleVideo?.statistics?.likeCount}</p>
            </div>
            <AiOutlineDislike size={20}/>
            </div>
            <div className="flex space-x-2 bg-gray-200 cursor-pointer items-center px-2 py-2 rounded-xl">
            <PiShareFat />
            <h1>Share</h1>
            </div>
            <div className="flex space-x-2 bg-gray-200 cursor-pointer items-center px-2 py-2 rounded-xl">
            <GoDownload />
            <h1>Download</h1>
            </div>
            </div>
        </div>
        
        </div>
        
        <div>

            {/* <div className="ml-4 justify-between  flex items-center">
               <h1>Top Chat</h1>
               <BsThreeDotsVertical/>
            </div> */}
        </div>
        
     
    </div>
  );
}

export default Watch;
