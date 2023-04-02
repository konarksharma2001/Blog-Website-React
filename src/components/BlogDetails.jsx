import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="  flex flex-col  gap-y-1 w-[42vw] ml-[30vw] mb-[1.2rem]">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg hover:underline">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className="italic">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="text-center font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm mt-[4px]"> Posted on {post.date}</p>
      <p className="text-md mt-[14px] "> {post.content}</p>
      <div className="flex gap-x-3">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
