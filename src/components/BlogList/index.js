import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="outerDiv">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} detail={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList