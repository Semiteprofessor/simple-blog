import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/' + blogs.id, {
      method: 'DELETE'
    })
    .then(() => {
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
        {isPending && <div><div class="progress">
              <div className="indeterminate"></div>
              </div>
            </div>
        }
        { error && <div>{ error } </div>}
        {blogs && (<article>
          <h2>{ blogs.title }</h2>
          <div>Weitten By: { blogs.author }</div>
          <p>{blogs.body}</p>
          <button onClick={() => handleDelete(blogs.id)}><i className="material-icons">delete</i></button>
        </article>)}
    </div>
  )
}

export default BlogDetails
