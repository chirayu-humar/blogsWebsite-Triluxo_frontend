import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {detail} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = detail
  return (
    <Link to={`/blogs/${id}`}>
      <li className="outerBlogItem">
        <div className="firstDiv">
          <img alt="temp" className="specialImage" src={imageUrl} />
        </div>
        <div className="secondDiv">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="bottomContainer">
            <div className="avatarContainer">
              <img alt="temp" className="avatarImage" src={avatarUrl} />
            </div>
            <p>{author}</p>
          </div>
        </div>
      </li>
      <hr />
    </Link>
  )
}

export default BlogItem