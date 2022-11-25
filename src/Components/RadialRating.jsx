import conditionalClasses from "../util/conditionalClasses";

const RadialRating = (props) => {
  return (
    <div
      className={conditionalClasses(
        "radial-progress",
        checkProgress(props.obj.vote_average),
        "bg-base-100"
      )}
      style={{
        "--value": (props.obj.vote_average / 10) * 100,
        "--size": "4rem",
        "--thickness": "2px",
      }}
    >
      {props.obj.vote_average.toFixed(1)}
    </div>
  );
};

export default RadialRating;

const checkProgress = (progress) => {
    if(progress < 5)
        return "text-secondary";
    if(progress >= 5 && progress < 7.5)
        return "text-warning";
    
    return "text-accent";
}