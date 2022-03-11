import Casa from "./Casa/Casa";
import { Link } from "react-router-dom";


import "./Home.scss";


const Home = () => {
 
 
  return (
    <div>
      <h1>Productos destacados</h1>
      <Casa/>
      <h3>Para poder realizar un pedido,</h3>
      <span>
        <Link to="/register">Registrate</Link>
      </span>
      <h3>si ya estas registrado, entra en</h3>
      <span>
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Home;