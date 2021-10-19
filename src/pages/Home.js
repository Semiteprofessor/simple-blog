import Blog from './Blog'
import useFetch from './useFetch'

const Home = () => {

  const { data: blogs, setData,  isPending, error } = useFetch('http://localhost:8000/blogs/')

  const handleDelete = (id) => {
    const deleteBlog = blogs.filter(blog => blog.id !== id);
    setData(deleteBlog);
  }

  return (
    <div className="container">
      { error && <div>{ error } </div>}
        {isPending && <div><div class="progress">
              <div className="indeterminate"></div>
              </div>
            </div>
        }
        {blogs && <Blog blogs={blogs} handleDelete={handleDelete} />}
        
    </div>
  )
}

export default Home
