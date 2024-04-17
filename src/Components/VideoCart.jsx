import React from 'react' 

import Avatar from 'react-avatar'
function VideoCart({item}) {
  return (
    <div className='w-94 cursor-pointer'>
        <img
        className='mt-2 w-full rounded-lg'
        src={item.snippet.thumbnails.high.url} alt="" />
        <div>
            <div className='flex items-center mt-1'>
                <Avatar
                className='rounded-full mt-1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9K9c2nz6mu8dSYSQNX50GNDU6_HHJP74vd71hST-ej98DWUe1HP6udDmpoAU31CDxsA&usqp=CAU' alt='avatar img' size={40} />
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
