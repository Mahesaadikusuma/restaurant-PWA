import API_ENDPOINT from "../globals/api-endPoint";

class restaurantDB {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async restaurantReview(data) {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.RESTAURANT_REVIEW, options);
      //   const responseJson = await response.json();
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default restaurantDB;
