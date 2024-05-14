import restaurantDB from "../../data/restaurantDB";
import {
  createRestaurantItemTemplate,
  createSkeletonListTemplate,
} from "../templates/template-creator";

const ListRestaurant = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <div class="explore-restaurant">
        <h2>Explore Restaurant</h2> 
        <section class="card-restaurant"></section>
        <div class="restaurant" id="restaurant-container-populer"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector(
      "#restaurant-container-populer"
    );
    const skeleton = document.querySelector(".card-restaurant");

    skeleton.innerHTML += createSkeletonListTemplate();
    skeleton.style.display = "grid";

    setTimeout(async () => {
      try {
        const restaurants = await restaurantDB.restaurantList();
        console.log(restaurants);

        skeleton.style.display = "none";
        restaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML +=
            createRestaurantItemTemplate(restaurant);
        });
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        restaurantContainer.innerHTML =
          "<p>Failed to load restaurants. Please try again later.</p>";
      }
    }, 2000);
  },
};

export default ListRestaurant;
