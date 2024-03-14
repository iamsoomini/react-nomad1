import { PropTypes } from "react";
import { Link } from "react-router-dom";

function movie({id, coverImage, title, summary, genres}){

    return (
     <div>
        <img src={coverImage} alt={title} />
        <h2>
          <Link to ={`/movie/${id}`} >{title}</Link>
        </h2>
        <p>{summary.length > 250? summary.slice(0,250)+"..." : summary}</p>
        <ul>{genres.map((g) => (
          <li key={g}>{g}</li>
        ))}</ul>
        </div>
);
}

// movie.propTypes = {
//   // id: PropTypes.number.isRequired,  
//   coverImage: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired
// }

export default movie;