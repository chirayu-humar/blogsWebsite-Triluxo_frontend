import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'

class BlogItemDetails extends Component {
  state = {blogData: {}, isDataReached: false}

  componentDidMount() {
    this.getBlockItemData()
  }

  getBlockItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token');
    console.log(id)
    const options = {
      method: 'GET', // Replace with the HTTP method you need (GET, POST, etc.)
      headers: {
        'Authorization': `Bearer ${jwtToken}`, // Include the token in the 'Authorization' header
        'Content-Type': 'application/json', // You may need to specify the content type based on your API
      }
    }
    const response = await fetch(`https://chirayu-blog.onrender.com/blog/${id}`, options)
    const jsonData = await response.json()
    console.log(jsonData)
    const updatedData = {
      author: jsonData.author,
      avatarUrl: jsonData.avatar_url,
      content: jsonData.content,
      id: jsonData.id,
      title: jsonData.title,
      topic: jsonData.topic,
      imageUrl: jsonData.image_url,
    }
    this.setState({blogData: updatedData, isDataReached: true})
  }

  render() {
    const {blogData, isDataReached} = this.state
    const {author, avatarUrl, content, id, title, topic, imageUrl} = blogData
    return (
      <div className="outerDiv">
        <div className="child1">
          <h1>{title}</h1>
        </div>
        <div className="child2">
          <div className="avatarContainer">
            <img className="avatar" src={avatarUrl} />
          </div>
          <p>{author}</p>
        </div>
        <div className="child3">
          <img alt={title} className="mainImage" src={imageUrl} />
        </div>
        <div className="child4">
          <p>{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails