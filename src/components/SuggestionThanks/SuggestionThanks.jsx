import "./SuggestionThanks.scss";
import PlantDoodle from "../../assets/images/PlantDoodle.png";
import { useNavigate } from "react-router-dom";

function SuggestionThanks() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="suggestion-thanks">
        <div className="suggestion-thanks__text">
          Thank you for being a Bell Changemaker!
        </div>
        <div className="suggestion-thanks__image-container">
          <img
            className="suggestion-thanks__image"
            src={PlantDoodle}
            alt="Woman holding plant"
          />
        </div>
        <button
          className="suggestion-thanks__button suggestion-thanks__button--go-home"
          onClick={handleOnClick}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SuggestionThanks;
