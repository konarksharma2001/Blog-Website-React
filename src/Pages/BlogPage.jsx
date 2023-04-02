import { useState, useEffect, useContext } from 'react';
import React from 'react';
import {useNavigation, useLocation, useNavigate} from "react-router-dom";
import { AppContext } from '../context/AppContext';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import { baseUrl } from '../baseUrl';
import BlogDetails  from '../components/BlogDetails';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {setLoading, loading} = useContext(AppContext);

  const blogId = location.pathname.split('/').at(-1); 

  async function fetchRelatedBlogs() {
      setLoading(true);
      let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
      try{
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
      }
      catch(error){
         console.log("Error Found In Blog Id Api Call");
         setBlog(null);
         setRelatedBlogs([]);
      }
      setLoading(false);
  }  

  useEffect( () => {
    if(blogId){
        fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div className="my-[6.5rem]">
      <Header />
      <div >
        <button
        className='rounded-md border-2 px-4 py-1 ml-[30vw] mb-8'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ? 
        (
          <div>
              <p> Loading</p>
          </div>
        ) : 

        blog ? 
        (
          <div >
              <BlogDetails post={blog} />
              <h2 className="ml-[30vw] mb-8  mt-8 font-bold text-3xl"> Related Blogs </h2>
              {
                relatedblogs.map( (post)=>  (
                  <div key = {post.id}>
                      <BlogDetails post={post} />
                  </div>
                ))
              }

          </div>
        ) : 

        (
          <div>
            <p>No Blog Found</p>
          </div>
        )

      }
    </div>
  )
}

export default BlogPage;
