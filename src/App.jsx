import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Question" element={<Question />}></Route>
      <Route path="/Result" element={<Result />}></Route>
    </Routes>
  );
};

export default App;
