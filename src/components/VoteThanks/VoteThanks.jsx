import "./VoteThanks.scss";
import thanksVoting from "../../assets/images/thanksVoting";
import { useNavigate } from "react-router-dom";

function VoteThanks() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/");
    window.location.reload();
  }

  return <div>Vote Thanks</div>;
}

export default VoteThanks;
