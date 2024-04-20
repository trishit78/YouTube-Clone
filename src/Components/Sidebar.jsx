import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SidebarItems = [
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
    {
        icons:<FaHome size={25}  />,
        title:"Home",
    },
    {
        icons:<SiYoutubeshorts size={25}  />,
        title:"Shorts",
    },
    {
        icons:<MdSubscriptions size={25}  />,
        title:"Subscription",
    },
]

function Sidebar() {

    const open = useSelector((store)=>store.app.open)
    

    return (
    <>
    <div className ={`relative h-[100vh] {open ? "w-[20%]" :w-[6%]}  ml-6 space-y-4 overflow-y-scroll overflow-x-hidden`}>
        {

            SidebarItems.map((item,index) => ( 
                <div key={index} className='flex items-center space-x-3 mr-4  '>
                    {item.icons}
                    {
                        open &&(
                            <Link to='/'>
                            <p className='font-semibold text-xl'>{item.title}</p>
                            </Link>

                        )
                    }
        </div>
        ))
    }
        
     
       
    </div>
    
    </>
  )
}

export default Sidebar
