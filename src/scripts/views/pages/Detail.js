import UrlParser from "../../routes/url-parser";
import restaurantDB from "../../data/restaurantDB";
import {
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonDetailTemplate,
} from "../templates/template-creator";

import LikeButtonInitiator from "../../utils/like-button-initiator";

const DetailRestaurant = {
  async render() {
    return `
      <div class="explore-restaurant">
        <h2>Detail Restaurant</h2>
        <div class="restaurant-detail-skeleton" id="restaurant-container-detail-skeleton"></div>
        <div class="restaurant-detail" id="restaurant-container-detail"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector(
      "#restaurant-container-detail"
    );
    const skeletonDetail = document.querySelector(
      ".restaurant-detail-skeleton"
    );

    skeletonDetail.innerHTML += createSkeletonDetailTemplate();
    skeletonDetail.style.display = "grid";
    const restaurant = await restaurantDB.restaurantDetail(url.id);

    setTimeout(async () => {
      try {
        skeletonDetail.style.display = "none";
        restaurantContainer.innerHTML = createDetailTemplate(restaurant);
        // const likeButtonContainer = document.querySelector(
        //   "#likeButtonContainer"
        // );

        // likeButtonContainer.innerHTML += createLikedButtonTemplate();

        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector("#likeButtonContainer"),
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            rating: restaurant.rating,
            city: restaurant.city,
            address: restaurant.address,
            pictureId: restaurant.pictureId,
            description: restaurant.description,
          },
        });
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
        restaurantContainer.innerHTML =
          "<p>Failed to load restaurant details. Please try again later.</p>";
      }
    }, 500);

    // Set event listener on document for dynamic content
    document.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nameReview = document.querySelector("#review-title");
      const reviewBody = document.querySelector("#review-body");

      const review = {
        id: url.id,
        name: nameReview.value,
        review: reviewBody.value,
      };

      await restaurantDB.restaurantReview(review);
      const updatedRestaurant = await restaurantDB.restaurantDetail(url.id);
      restaurantContainer.innerHTML = createDetailTemplate(updatedRestaurant);

      nameReview.value = "";
      reviewBody.value = "";
    });
  },
};

export default DetailRestaurant;
