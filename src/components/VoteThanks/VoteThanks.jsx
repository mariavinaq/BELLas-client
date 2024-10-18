import "./VoteThanks.scss";
import thanksVoting from "../../assets/images/thanksVoting.png";
import { useNavigate } from "react-router-dom";

function VoteThanks() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/");
    window.location.reload();
  }

  function handleOnClickSuggestion() {
    navigate("/submit");
    window.location.reload();
  }

  return (
    <>
      <div className="vote-thanks">
        <img
          className="vote-thanks__image"
          src={thanksVoting}
          alt="Man holding heart"
        />
        <p className="vote-thanks__text">
          Want to make a change in your community?
        </p>
        <button
          className="vote-thanks__button vote-thanks__button--go-suggestion"
          onClick={handleOnClickSuggestion}
        >
          <p className="vote-thanks__button-text">Submit your suggestion</p>
        </button>
        <button
          className="vote-thanks__button vote-thanks__button--go-home"
          onClick={handleOnClick}
        >
          <p className="vote-thanks__button-text">Back to Home</p>
        </button>
      </div>
    </>
  );
}

export default VoteThanks;
