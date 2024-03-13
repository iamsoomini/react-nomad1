import { ReactPropTypes } from "react";
import { Link } from "react-router-dom";

function movie({coverImage, title, summary, genres}){

    return (
     <div>
        <img src={coverImage} alt={title} />
        <h2>
          <Link to ="/movie" >{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>{genres.map((g) => (
          <li key={g}>{g}</li>
        ))}</ul>
        </div>
);
}

// movie.propTypes = {
//   coverImage: ReactPropTypes.string.isRequired,
//   title: ReactPropTypes.string.isRequired,
//   summary: ReactPropTypes.string.isRequired,
//   genres: ReactPropTypes.arrayOf(ReactPropTypes.string).isRequired
// }

export default movie;