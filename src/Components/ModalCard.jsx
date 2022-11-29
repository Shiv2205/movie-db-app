import { useContext, useEffect, useState } from "react";
import GenreContext from "../util/genreContext";
import conditionalClasses from "../util/conditionalClasses";

const ModalCard = (props) => {
  const genre = useContext(GenreContext);
  const [genreList, setGenreList] = useState([]);
  const releaseDate = new Date(props.obj.release_date);

  useEffect(() => {
    let resList = [];
    resList.push(
      props.obj.genre_ids.map((id) => {
        let res = genre.find((obj) => obj.id === id);
        return res.name;
      })
    );
    setGenreList(resList[0]);
    //console.log(genreList);
  }, []);

  return (
    <div className="card min-w-fit">
      <figure className="px-2 pt-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.obj.poster_path}`}
          alt="Movie Poster"
          className="rounded-xl"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title ">{props.obj.title}</h2>

        <p>{props.obj.overview}</p><br />
        <h3 className="text-lg font-semibold">Genres:</h3>
        <div className={conditionalClasses(genreList.length < 5 ? "lg:grid-cols-4" : "lg:grid-cols-5", "grid gap-5 md:grid-cols-2 md:gap-7 sm:grid-cols-2")} >
        {genreList.length === 0 ? "N/A" : genreList.map((genreType, index) => {
          return (
            <div key={index} className="mt-5">
                <div key={index} className="py-2 rounded-lg text-center text-white font-semibold bg-fuchsia-600 lg:px-4 md:px-7 sm:px-4">
                {genreType}
                </div>
            </div>
          );
        })}
        <p>Release Date: <span>{releaseDate.getDate()} {monthToString(releaseDate.getMonth())} {releaseDate.getFullYear()}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;

const monthToString = (monthNumber) => {
    switch (monthNumber){
      case 0: return "Jan"; break;
      case 1: return "Feb"; break;
      case 2: return "Mar"; break;
      case 3: return "Apr"; break;
      case 4: return "May"; break;
      case 5: return "Jun"; break;
      case 6: return "Jul"; break;
      case 7: return "Aug"; break;
      case 8: return "Sep"; break;
      case 9: return "Oct"; break;
      case 10: return "Nov"; break;
      case 11: return "Dec"; break;
    }
}