import React from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1); 

  return (
    <div className="my-[6.5rem] "> 
       <Header/>
       <div className="flex gap-x-2 -mb-[4.5rem]">
            <button
            className='rounded-md border-2 px-4 py-1 ml-[30vw]' 
            onClick={( ()=> navigation(-1))}>
                Back
            </button>
            <h2 className="font-bold text-xl">
                Blogs Tagged <span className="underline text-blue-700">#{tag}</span>
            </h2>
       </div>
       <Blogs/>
       <Pagination/>
    </div>
  )
}

export default TagPage;
