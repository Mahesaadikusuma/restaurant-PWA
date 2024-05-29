const assert = require("assert");
Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#restaurant-container-populer");

  // I.seeElement(".query");

  I.see(
    "Tidak ada restaurant untuk ditampilkan",
    ".restaurant-item__not__found"
  );
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see(
    "Tidak ada restaurant untuk ditampilkan",
    ".restaurant-item__not__found"
  );

  I.amOnPage("/");

  // pause();
  I.wait(2);
  I.seeElement(".restaurant-title");
  const firstRestaurant = locate(".restaurant-title").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".restaurant-item");

  const likeRetaurantTitle = await I.grabTextFrom(".restaurant-title");
  assert.strictEqual(firstRestaurantName, likeRetaurantTitle);
});

// Scenario("unliking one restaurant", async ({ I }) => {
//   I.see(
//     "Tidak ada restaurant untuk ditampilkan",
//     ".restaurant-item__not__found"
//   );

//   I.amOnPage("/");
//   I.wait(2);

//   I.seeElement(".restaurant-title a");

//   const firstRestaurantName = await I.grabTextFrom(
//     locate(".restaurant-title a").first()
//   );

//   I.click(locate(".restaurant-title a").first());
//   I.wait(3);

//   I.seeElement("#likeButton");
//   I.click("#likeButton");

//   I.amOnPage("/#/like");
//   I.seeElement(".restaurant-item");

//   const likedRestaurantName = await I.grabTextFrom(".restaurant-title a");
//   assert.strictEqual(firstRestaurantName, likedRestaurantName);

//   I.click(".restaurant-title a");
//   I.wait(3);

//   I.seeElement("#likeButton");
//   I.click("#likeButton");

//   I.amOnPage("/#/like");

//   // I.seeElement(".restaurant-item");
//   // assert.strictEqual(
//   //   "Tidak ada restaurant untuk ditampilkan",
//   //   ".restaurant-item__not__found"
//   // );

//   I.dontSee(".restaurant-item");
//   I.see(
//     "Tidak ada restaurant untuk ditampilkan",
//     ".restaurant-item__not__found"
//   );
// });
