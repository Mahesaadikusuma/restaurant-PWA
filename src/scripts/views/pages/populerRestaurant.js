import restaurantDB from "../../data/restaurantDB";

const PopulerRestaurant = {
  async render() {
    return `
    <hero-bar></hero-bar>
       <div class="explore-restaurant">
        <h2>Populer Restaurant</h2> 
        <div class="restaurant" id="restaurant-container-populer"></div>
      </div>
        
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await restaurantDB.restaurantList();
    // cek api data
    console.log(restaurants);
  },
};

export default PopulerRestaurant;
