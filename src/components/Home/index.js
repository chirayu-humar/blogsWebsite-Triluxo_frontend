import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import Cookies from 'js-cookie'

class Home extends Component {
  state = {blogsList: []}

  componentDidMount() {
    this.makeTheRequest()
  }

  makeTheRequest = async () => {
    const jwtToken = Cookies.get('jwt_token');
    const options = {
      method: 'GET', // Replace with the HTTP method you need (GET, POST, etc.)
      headers: {
        'Authorization': `Bearer ${jwtToken}`, // Include the token in the 'Authorization' header
        'Content-Type': 'application/json', // You may need to specify the content type based on your API
      },
    };
    const response = await fetch('https://chirayu-blog.onrender.com/blog/all-blogs', options);
    let jsonData = await response.json()
    console.log(jsonData);
    // const updatedDataList = jsonData.map(eachItem => {
    //   const updatedData = {
    //     id: eachItem.id,
    //     title: eachItem.title,
    //     imageUrl: eachItem.image_url,
    //     avatarUrl: eachItem.avatar_url,
    //     author: eachItem.author,
    //     topic: eachItem.topic,
    //   }
    //   return updatedData
    // })
    jsonData = Array.from(jsonData);
    console.log(typeof(jsonData));
    if (Array.isArray(jsonData)) {
      const updatedDataList = jsonData.map(eachItem => {
        const updatedData = {
          id: eachItem.id,
          title: eachItem.title,
          imageUrl: eachItem.image_url,
          avatarUrl: eachItem.avatar_url,
          author: eachItem.author,
          topic: eachItem.topic,
        };
        return updatedData;
      });
      this.setState({blogsList: updatedDataList})
      // Rest of your code that uses updatedDataList
    } else {
      console.error('jsonData is not an array');
      // Handle the error or provide a default value for updatedDataList
    }
  }

  render() {
    const {blogsList} = this.state
    const isLoading = blogsList.length === 0
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading && (
          <div data-testid="loader">
            <Loader />
          </div>
        )}
        <BlogList blogsList={blogsList} />
      </div>
    )
  }
}

export default Home