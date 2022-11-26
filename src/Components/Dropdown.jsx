const Dropdown = (props) => {

  const handleChange = (param) => {
      props.setNotFound(false);
      props.setSortType(param);
      document.getElementById('searchbar').value = "";
  }

  return (
    <div className="dropdown dropdown-right">
      <label tabIndex={0} className="btn m-1">
        {displayGenre(props.sortType)}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
      >
        <li onClick={() => handleChange("now_playing")}>
          <a>Now Playing</a>
        </li>
        <li onClick={() => handleChange("popular")}>
          <a>Popular</a>
        </li>
        <li onClick={() => handleChange("top_rated")}>
          <a>Top-Rated</a>
        </li>
        <li onClick={() => handleChange("upcoming")}>
          <a>Upcoming</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

const displayGenre = (param) => {
   switch (param){
    case "now_playing": return "Now Playing"; break;
    case "popular": return "popular"; break;
    case "top_rated": return "Top-Rated"; break;
    case "upcoming": return "Upcoming"; break;
   }
}