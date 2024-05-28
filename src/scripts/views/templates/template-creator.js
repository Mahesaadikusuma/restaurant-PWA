import CONFIG from "../../globals/config";

const large = `large`;
const small = `small`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createDetailTemplate = (restaurant) => `
    <section id="detail">
      <div class="container">
        <div class="restaurant-hero">
          <picture>
            <source class="lazyload" media="(max-width: 600px)" data-srcset="${
              CONFIG.BASE_IMAGE
            }/${small}/${restaurant.pictureId}">

            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE}/${large}/${
  restaurant.pictureId
}" alt="${restaurant.name}" class="lazyload" />
        </picture>
          <div class="restaurantdetail">
            <div class="title-like" >
              <h1 class="restaurant-name">${restaurant.name}</h1>

              <div id='likeButtonContainer'>
                
              
              </div>
            </div>

            <div class="categories">
              <p class="categories-name">${restaurant.categories
                .map((category) => category.name)
                .join(`, `)}</p>
            </div>

            <div class="city-rating">
              <p class="city">${restaurant.city}</p>

              <div class="rating-detail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-star"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
                </svg>

                <p>${restaurant.rating}</p>
              </div>
            </div>

            <div class="address">
              <p>${restaurant.address}</p>
            </div>

            <div class="menu">
              <div class="menu-food">
                <h1>Foods</h1>
                ${restaurant.menus.foods
                  .map((food) => `<button>${food.name}</button>`)
                  .join(``)}
                
              </div>

              <div class="menu-drinks">
                <h1>Drinks</h1>
                ${restaurant.menus.drinks
                  .map((drinks) => `<button>${drinks.name}</button>`)
                  .join(``)}
              </div>
            </div>

            <p class="description">
             ${restaurant.description}
            </p>
          </div>
        </div>
        

        
        <section class="customer-review">
          ${restaurant.customerReviews
            .map((review) => createReviewTemplate(review))
            .join(``)}
            
        </section>
          
        <form action="" id="form" >
        <div class="customer-add-input">
        <h1>Review</h1>
            <div class="customer-title">
              <input
                type="text"
                name="title"
                id="review-title"
                placeholder="username"
                required
              />
            </div>

            <div class="customer-body">
              <textarea
                name="body"
                id="review-body"
                placeholder="Tuliskan isi Review"
                required
              ></textarea>
            </div>

            <button type="submit">Buat Review</button>
          </div>
        </form>
      </div>
    </section>
`;

const createReviewTemplate = (reviews) => ` 
<div class="customer-review-item">
  <div class="customer-review-header">
    <h1 class="customer-review-item-title">${reviews.name}</h1>
    <p class="customer-review-item-date">${reviews.date}</p>

    <p class="customer-review-item-body">
      ${reviews.review}
    </p>
  </div>
</div>`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
        <picture>
          
          <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE}/${small}/${restaurant.pictureId}">

          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE}/${large}/${restaurant.pictureId}" alt="${restaurant.name}" class="lazyload" />
        </picture>

        <div class="restaurant-item-city">
          <div class="">
            <p class="city">${restaurant.city}</p>
          </div>
          <div class="ratting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
            <p class="">${restaurant.rating}</p>
          </div>
        </div>
        <div class="restaurant-item-content">
          <h1 class="restaurant-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
          <p>${restaurant.description}</p>
        </div>
</article>`;
// <img data-src="" alt="" class="skeleton lazyload" />;

const createSkeletonListTemplate = () => `
  <div class="card-restaurant-item">
    <div class="card-restaurant-header">
       <picture>
        <source data-srcset="/images/placeholder.png" type="image/webp">
        <source data-srcset="/images/placeholder.png" type="image/jpeg">
        <img data-src="/images/placeholder.png" alt="" class="skeleton lazyload" />
      </picture>

      <h1 class="card-restaurant-title skeleton"></h1>
      <p class="card-restaurant-date skeleton"></p>


      <p class="card-restaurant-deskription skeleton"></p>
      <p class="card-restaurant-deskription skeleton"></p>
      <p class="card-restaurant-deskription skeleton"></p>
    </div>
  </div>

  <div class="card-restaurant-item">
    <div class="card-restaurant-header">
       <picture>
        <source data-srcset="/images/placeholder.png" type="image/webp">
        <source data-srcset="/images/placeholder.png" type="image/jpeg">
        <img data-src="/images/placeholder.png" alt="" class="skeleton lazyload" />
      </picture>

      <h1 class="card-restaurant-title skeleton"></h1>
      <p class="card-restaurant-date skeleton"></p>

      <p class="card-restaurant-deskription skeleton"></p>
      <p class="card-restaurant-deskription skeleton"></p>
      <p class="card-restaurant-deskription skeleton"></p>
    </div>
  </div>
`;

const createSkeletonDetailTemplate = () => `
<section id="detail">
      <div class="container">
        <div class="restaurant-hero">
          <img src="" alt="" class="skeleton lazyload" />
          <div class="restaurantdetail">
            <div class="title-like">
              <h1 class="restaurant-name skeleton"></h1>

              <button
                aria-label="like this restaurant"
                id="likeButton"
                class="like skeleton"
              >
                <!-- <i class="fa fa-heart" aria-hidden="true"></i> -->
              </button>
            </div>

            <div class="categories skeleton">
              <p class="categories-name"></p>

              <p class="categories-name"></p>
            </div>

            <div class="city-rating skeleton">
              <p class="city"></p>

              <div class="rating-detail">
                <!-- <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-star"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
                </svg> -->

                <p></p>
              </div>
            </div>

            <div class="address skeleton">
              <p></p>
            </div>

            <div class="menu skeleton">
              <div class="menu-food">
                <h1></h1>
                <!-- <button></button> -->
                <!-- <button></button> -->
              </div>

              <div class="menu-drinks skeleton">
                <h1></h1>
                <!-- <button></button> -->
                <!-- <button></button> -->
              </div>
            </div>

            <p class="description skeleton"></p>
            <p class="description skeleton"></p>
            <p class="description skeleton"></p>
          </div>
        </div>

        <section class="customer-review">
          <div class="customer-review-item">
            <div class="customer-review-header">
              <h1 class="customer-review-item-title skeleton"></h1>
              <p class="customer-review-item-date skeleton"></p>

              <p class="customer-review-item-body skeleton"></p>
              <p class="customer-review-item-body skeleton"></p>
              <p class="customer-review-item-body skeleton"></p>
            </div>
          </div>

          <div class="customer-review-item">
            <div class="customer-review-header">
              <h1 class="customer-review-item-title skeleton"></h1>
              <p class="customer-review-item-date skeleton"></p>

              <p class="customer-review-item-body skeleton"></p>
              <p class="customer-review-item-body skeleton"></p>
              <p class="customer-review-item-body skeleton"></p>
            </div>
          </div>

          <div class="customer-review-item">
            <div class="customer-review-header">
              <h1 class="customer-review-item-title skeleton"></h1>
              <p class="customer-review-item-date skeleton"></p>

              <p class="customer-review-item-body skeleton"></p>
              <p class="customer-review-item-body skeleton"></p>
              <p class="customer-review-item-body skeleton"></p>
            </div>
          </div>
        </section>
      </div>
    </section>`;

export {
  createRestaurantItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonListTemplate,
  createSkeletonDetailTemplate,
};
