import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

import FavoriteRestaurantView from "./liked-movie/favorite-restaurant-view";
import FavoriteRestaurantShowPresenter from "./liked-movie/favorite-movie-show-presenter";

const view = new FavoriteRestaurantView();
const Like = {
  async render() {
    return view.getTemplate();

    // return `
    // <div class="explore-restaurant">
    //     <h2>Favorite Restaurant</h2>
    //     <section class="card-restaurant"></section>
    //     <div class="restaurant" id="restaurant-container-populer"></div>
    //   </div>`;
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
    // const restaurantContainer = document.querySelector(
    //   "#restaurant-container-populer"
    // );
    // const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    // restaurant.forEach((resto) => {
    //   restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    // });
  },
};

export default Like;
