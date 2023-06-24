import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Book from "./pages/book/Book";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/books" element={<List/>}/>
        <Route path="/books/:id" element={<Book/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;