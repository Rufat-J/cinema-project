export default function ({ handleClick }) {
    if (!{ handleClick }) {
      return null;
    }
    return (
      <button className="button" id="movie-sort-btn" onClick={handleClick}>
        {" "}
        A-Z
      </button>
    );
  }
  