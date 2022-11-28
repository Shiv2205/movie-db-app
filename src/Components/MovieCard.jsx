import MovieModal from "./MovieModal";
import RadialRating from "./RadialRating";

const MovieCard = (props) => {
  return (
    <div className="card bg-base-300 shadow-xl ml-10 mb-10 lg:w-80 md:w-72 sm:w-72">
      <figure className="px-2 pt-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.obj.poster_path}`}
          alt="Poster"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.obj.title}</h2>
        {/*<p className="overflow-hidden max-h-8">{props.obj.overview}</p>*/}
        <div className="card-actions grid grid-cols-1">
          {/*<button className="btn btn-primary">Learn More</button>*/}
          <h2 className="font-bold text-lg mt-5">
            Rating: {props.obj.vote_count === 0 ? "N/A" : <RadialRating obj={props.obj} />}
          </h2>
          <MovieModal id={props.obj.id} obj={props.obj} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
