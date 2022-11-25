import { FcSearch } from "react-icons/fc";
import Dropdown from "./Dropdown";

const Navbar = (props) => {
  return (
    <div className="navbar bg-secondary mb-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-white text-xl">Movie DB</a>
        <Dropdown sortType={props.obj.sortType} setSortType={props.obj.setSortType} />
      </div>
      <div className="flex-none gap-2">

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          <div className="btn rounded-full bg-transparent border-none">
            <FcSearch size="20px" />
          </div>

      </div>
    </div>
  );
};

export default Navbar;


