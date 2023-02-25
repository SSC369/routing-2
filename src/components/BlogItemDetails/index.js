import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
      avatarUrl: data.avatar_url,
    }

    this.setState({
      blogData: updatedData,
      isLoading: false,
    })
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, author, avatarUrl, content} = blogData
    return (
      <div className="blog-main-container">
        <h1 className="title-bg">{title}</h1>
        <div className="bg-profile-container">
          <img src={avatarUrl} alt={author} className="bg-author-img" />
          <p className="bg-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="bg-image" />
        <p className="bg-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
