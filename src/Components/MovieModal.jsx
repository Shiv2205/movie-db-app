import ModalCard from "./ModalCard";

const MovieModal = (props) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor={props.id} className="btn btn-secondary mt-5">
        Read More
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  max-w-3xl">
          <label htmlFor={props.id} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <ModalCard obj={props.obj} />

        </div>
      </div>
    </div>
  );
};

export default MovieModal;
