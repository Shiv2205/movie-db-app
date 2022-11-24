import conditionalClasses from "../util/conditionalClasses";

const MovieCard = (props) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure className="px-2 pt-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.obj.poster_path}`}
          alt="Poster"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.obj.title}</h2>
        <p>{props.obj.overview}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Learn More</button>
          <h2 className="font-bold text-lg">
            Rating: <div className={conditionalClasses("badge", props.obj.vote_average < 7 ? "badge-secondary" : "badge-accent")}>{props.obj.vote_average.toFixed(1)}</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
