import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import SuggestionForm from "./components/SuggestionForm/SuggestionForm";
import SuggestionThanks from "./components/SuggestionThanks/SuggestionThanks";
import Header from "./components/Header/Header";
import "./App.scss";
import SubmitSuggestion from "./components/SubmitSuggestion/SubmitSuggestion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/suggestion" element={<SuggestionForm />}></Route>
          <Route path="/suggestion/thanks" element={<SuggestionThanks />} ></Route>
          <Route path="/submitsuggestion" element={<SubmitSuggestion />}></Route>
          {/* {* added for yvonne's testing */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
