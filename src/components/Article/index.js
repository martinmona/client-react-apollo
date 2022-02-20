import React from "react";

const Article = ({article: { _id,title, body, createdAt }}) => {
  return (
    <div className="Card">
      <div>

        <h1 className="Card--name">{title}:</h1>

        <p> {body}</p>
        <p>{createdAt}</p>
      </div>

    </div>
  )
}

export default Article;
