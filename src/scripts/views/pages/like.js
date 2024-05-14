import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Like = {
  async render() {
    return `
    <div class="explore-restaurant">
        <h2>Favorite Restaurant</h2> 
        <section class="card-restaurant"></section>
        <div class="restaurant" id="restaurant-container-populer"></div>
      </div>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector(
      "#restaurant-container-populer"
    );

    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();

    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Like;
