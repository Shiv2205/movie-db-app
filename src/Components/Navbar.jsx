import { FcSearch } from "react-icons/fc";
import Dropdown from "./Dropdown";

const Navbar = (props) => {

  const handleSubmit = () => {
    let searchTarget = document.getElementById('searchbar').value;
    props.getSearch(searchTarget);
    props.setNotFound(false);
  }

  const homeButton = () => {
    document.getElementById('searchbar').value = "";
    props.setNotFound(false);
    props.obj.setSortType("now_playing");
  }

  return (
    <div className="navbar bg-secondary mb-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-white text-xl" onClick={() => homeButton()}>Movie DB</a>
        <Dropdown sortType={props.obj.sortType} setSortType={props.obj.setSortType} setNotFound={props.setNotFound}/>
      </div>
      <div className="flex-none gap-2">

          <div className="form-control">
            <input
              id = "searchbar"
              type="text"
              placeholder="Search"
              className="input input-bordered"
              onKeyDown={event => {if(event.key === 'Enter'){handleSubmit()}}}
            />
          </div>

          <div className="btn rounded-full bg-transparent border-none" onClick={() => handleSubmit()}>
            <FcSearch size="20px" />
          </div>

      </div>
    </div>
  );
};

export default Navbar;