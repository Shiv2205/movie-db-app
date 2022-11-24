import conditionalClasses from "../util/conditionalClasses";

const MovieCard = (props) => {
  return (
    <div className="card bg-base-300 shadow-xl ml-10 mb-10 lg:w-96 md:w-72 sm:w-72">
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
          {/*<button className="btn btn-primary">Learn More</button>*/}
          <h2 className="font-bold text-lg">
            Rating: {props.obj.vote_count === 0 ? "N/A" : <div className={conditionalClasses("radial-progress", checkProgress(props.obj.vote_average), "bg-base-100")} style={{"--value":((props.obj.vote_average/10) * 100), "--size": "4rem", "--thickness": "2px" }}>{props.obj.vote_average.toFixed(1)}</div>}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

//props.obj.vote_average < 7 ? "badge-secondary" : "badge-accent" 
//<div className={conditionalClasses("badge", checkProgress(props.obj.vote_average))}>{props.obj.vote_average.toFixed(1)}</div>

const checkProgress = (progress) => {
    if(progress < 5)
        return "text-secondary";
    if(progress >= 5 && progress < 7.5)
        return "text-warning";
    
    return "text-accent";
}