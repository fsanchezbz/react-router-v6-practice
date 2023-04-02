import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors/authorsSlice";
import { Link } from "react-router-dom";

// Import useParams from React Router
import { useParams } from "react-router-dom";

export default function Author () {

  // Extract the `name` URL parameter.
  const { name } =  useParams()

  const authors = useSelector(selectAuthors)
  const author = authors[name]

  return (
    <main>
      {/* here we repaced "REPLACE ME" to {name} */}
      <h1>Articles by {name}</h1>
      <ul>
        {author && author.articles ? author.articles.map(slug => (
          <li key={slug}>
            <Link to={`/articles/${slug}`}>
              {slug}
            </Link>
          </li>
        )) : <p> No Articles Found...</p>}
      </ul> 
    </main>
  )
}
