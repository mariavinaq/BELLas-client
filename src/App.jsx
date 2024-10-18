import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import SuggestionForm from "./components/SuggestionForm/SuggestionForm";
import SuggestionThanks from "./components/SuggestionThanks/SuggestionThanks";
import Header from "./components/Header/Header";
import "./App.scss";
import SubmitSuggestion from "./components/SubmitSuggestion/SubmitSuggestion";
import VoteThanks from "./components/VoteThanks/VoteThanks";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="all-wrapper">
        <div className="mobile-wrapper">
        <Header />
          <Routes>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/vote" element={<SuggestionForm />}></Route>
            <Route path="/vote/thanks" element={<VoteThanks />}></Route>
            <Route path="/submit" element={<SubmitSuggestion />}></Route>
            <Route path="/submit/thanks" element={<SuggestionThanks />}></Route>
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
