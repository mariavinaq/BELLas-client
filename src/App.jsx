import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import SuggestionForm from "./components/SuggestionForm/SuggestionForm";
import Header from "./components/Header/Header";
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Feed />}></Route>
          <Route path='/suggestion' element={<SuggestionForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App