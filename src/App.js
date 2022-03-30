import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/navigation.component'


const Shop = () => {
  return <h1>welcome shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
