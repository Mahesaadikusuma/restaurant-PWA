import { createRestaurantItemTemplate } from "../../templates/template-creator";

class FavoriteRestaurantView {
  getTemplate() {
    return ` 
     <div class="explore-restaurant">
        <h2>Favorite Restaurant</h2> 
        <section class="card-restaurant">
        </section>
        
        <div class="restaurant" id="restaurant-container-populer">
        </div>
      </div>`;
  }
  // <input id="query" type="text">

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantItemTemplate(restaurant)),
        ""
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById("restaurant-container-populer").innerHTML = html;

    document
      .getElementById("restaurant-container-populer")
      .dispatchEvent(new Event("restaurant-container-populer:updated"));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>
    `;
  }
}

export default FavoriteRestaurantView;
