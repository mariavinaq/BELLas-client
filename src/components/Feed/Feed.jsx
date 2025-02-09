import { useState, useEffect } from "react";
import { getSuggestions } from "../../api";
import { useNavigate } from "react-router-dom";
import SuggestionOption from "../SuggestionOption/SuggestionOption";
import Loader from "../Loader/Loader";
import "./Feed.scss";

function Feed() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [selectedTop, setSelectedTop] = useState(true);
  const [selectedNew, setSelectedNew] = useState(false);
  const [selectedAll, setSelectedAll] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const retrieveSuggestions = async () => {
      const fetchedSuggestions = await getSuggestions();
      setSuggestions(fetchedSuggestions)
      const sorted = suggestions.sort((a, b) => b.votes - a.votes);
      const topThree = sorted.slice(0, 3);
      setSuggestionsList(topThree);
      setDataLoading(false);
    };
    retrieveSuggestions();
  }, []);

  const handleTop = () => {
    const sorted = suggestions.sort((a, b) => b.votes - a.votes);
    const topThree = sorted.slice(0, 3);
    setSuggestionsList(topThree);
    setSelectedTop(true);
    setSelectedNew(false);
    setSelectedAll(false);
  };

  const handleNew = () => {
    const sorted = suggestions.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    setSuggestionsList(sorted);
    setSelectedTop(false);
    setSelectedNew(true);
    setSelectedAll(false);
  };

  const handleAll = () => {
    const unsorted = suggestions.sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
    );
    setSuggestionsList(unsorted);
    setSelectedTop(false);
    setSelectedNew(false);
    setSelectedAll(true);
  };

  const handleSuggestion = () => {
    navigate("/submit");
  };

  return (
    <div className="feed">
      <div className="feed__hero">
        <h1 className="feed__title">Vote for change in your community</h1>
        <p className="feed__blurb">
          Bell is committed to contributing to a better world, community, and
          workplace. Join us in this mission by voicing your opinion and voting
          for the change you want to see most in your community. We’ll then
          partner with a community organization that can make the idea with the
          most votes a reality.
        </p>
      </div>
      <div className="feed__filters">
        <button
          className={`feed__button ${
            selectedTop ? "feed__button--selected" : ""
          }`}
          onClick={handleTop}
        >
          Top
        </button>
        <button
          className={`feed__button ${
            selectedNew ? "feed__button--selected" : ""
          }`}
          onClick={handleNew}
        >
          New
        </button>
        <button
          className={`feed__button ${
            selectedAll ? "feed__button--selected" : ""
          }`}
          onClick={handleAll}
        >
          All
        </button>
      </div>
      <div className="feed__main">
        {dataLoading ? <Loader /> : suggestionsList.map((suggestion) => (
          <SuggestionOption suggestion={suggestion} key={suggestion.id} />
        ))}
      </div>
      <button className="feed__suggest" onClick={handleSuggestion}>
        Have a suggestion? Submit now!
      </button>
    </div>
  );
}

export default Feed;
