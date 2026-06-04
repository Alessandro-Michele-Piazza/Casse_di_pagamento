import { Link } from "react-router";
import "../css/navbar.css";
import ROUTES from "../router/routes";

export default function Navbar() {
  return (
    <>
        <nav className="sfondo_blu p-4 sticky w-full top-0 left-0 z-10"> 
            <div className="container mx-auto flex items-center justify-between text-white">
                <div className="text-lg font-bold ">Casse Automatiche</div>
                <div>
                  <Link to={ROUTES.HOME} className="px-3 py-2 rounded">Home</Link>
                  <Link to={ROUTES.PRODOTTI} className="px-3 py-2 rounded">Prodotti</Link>
                  <Link to={ROUTES.CONTATTI} className="px-3 py-2 rounded">Contatti</Link>
                </div>
            </div>
        </nav>
    </>
  );
}

// CREO UNA NAVBAR VUOTA PER ORA, POI LA RIEMPIRO IN SEGUITO