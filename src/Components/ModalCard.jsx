import { useContext, useEffect, useState } from "react";
import GenreContext from "../util/genreContext";

const ModalCard = (props) => {
  const genre = useContext(GenreContext);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    let resList = [];
    resList.push(
      props.obj.genre_ids.map((id) => {
        let res = genre.find((obj) => obj.id === id);
        return res.name;
      })
    );
    setGenreList(resList[0]);
    console.log(genreList);
  }, [genreList]);

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

        <p>{props.obj.overview}</p> 
        <div className="grid grid-cols-5 gap-3">
        {genreList.length === 0 ? "N/A" : genreList.map((genreType) => {
          return (
            <div className="mt-5">
                <div className="px-4 py-2 rounded-lg text-center font-semibold bg-fuchsia-600">
                {genreType}
                </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
