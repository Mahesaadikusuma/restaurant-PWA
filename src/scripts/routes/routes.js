import ListRestaurant from "../views/pages/ListRestaurant";
import DetailRestaurant from "../views/pages/Detail";
import PopulerRestaurant from "../views/pages/populerRestaurant";
import Like from "../views/pages/like";

const routes = {
  "/": ListRestaurant, // default page
  "/list-restaurant": ListRestaurant,
  "/populer-restaurant": PopulerRestaurant,
  "/detail/:id": DetailRestaurant,
  "/like": Like,
};

export default routes;
