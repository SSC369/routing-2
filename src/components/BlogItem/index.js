import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {id, title, imageUrl, author, avatarUrl, topic} = blog
    return (
      <Link to={`blogs/${id}`} className="blog-item-link">
        <li className="blog-item">
          <img src={imageUrl} alt={title} className="blog-image" />
          <div className="blog-details">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="profile-container">
              <img src={avatarUrl} alt={author} className="avatar" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default BlogItem
