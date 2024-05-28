import restaurantDB from "../../data/restaurantDB";
import {
  createRestaurantItemTemplate,
  createSkeletonListTemplate,
} from "../templates/template-creator";

const PopulerRestaurant = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <div class="explore-restaurant">
        <h2>Populer Restaurant</h2>
        <div class="card-restaurant"></div>
        <div class="restaurant" id="restaurant-container-populer"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantDB.restaurantList();
    const restaurantContainer = document.querySelector(
      "#restaurant-container-populer"
    );

    // cek API

    const skeleton = document.querySelector(".card-restaurant");
    skeleton.innerHTML = createSkeletonListTemplate();
    skeleton.style.display = "grid";

    const populerRestaurant = restaurants.filter(
      (restaurant) => restaurant.rating >= 4
    );

    console.log(populerRestaurant);

    try {
      setTimeout(() => {
        skeleton.style.display = "none";
        populerRestaurant.forEach((restaurant) => {
          restaurantContainer.innerHTML +=
            createRestaurantItemTemplate(restaurant);
        });
      }, 1000); // Set a delay to simulate loading
    } catch (error) {
      console.log(error);
    }
  },
};

export default PopulerRestaurant;
