import React from 'react'
import styles from '../Styles/home.module.css'

const Comment = ({comment}) => {
  return (
    <div className={styles.postCommentsItem}>
    <div className={styles.postCommentHeader}>
      <span className={styles.postCommentAuthor}>{comment.user.name}</span>
      <span className={styles.postCommentTime}>a minute ago</span>
      <span className={styles.postCommentLikes}>22</span>
    </div>

    <div className={styles.postCommentContent}>{comment.content}</div>
  </div>
  )
}

export default Comment