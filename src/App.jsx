import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import SuggestionForm from "./components/SuggestionForm/SuggestionForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />}></Route>
          <Route path='/suggestion' element={<SuggestionForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App