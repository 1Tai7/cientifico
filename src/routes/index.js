//aqui se importa los templates y paginas creadas
import Header from "../template/Header";
import Home from "../pages/home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//creacion de rutas y que va a hacer render en cada una
const routes = {
  "/": Home,
  //el id empuja al template
  "/:id": Character,
  "/contact": "Contact",
};
//se encarga de mostrar los objetos, esperamos hasta que algo suceda para mostrarlo
const router = async () => {
  //estos elemntos son del /public/index
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = Header();
  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};
export default router;
