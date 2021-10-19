import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blogs, handleDelete}) => {
  return (
    <div className="container">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </Link>
            
          </div>
        ))}
    </div>
  )
}

export default Blog
