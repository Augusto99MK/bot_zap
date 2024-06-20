import mongoose from "mongoose";
/** @module restaurant_model*/
/**
 * @description - Restaurant schema for data modeling using Mongoose.
 * @typedef {Object} RestaurantSchema
 * @property {string} name - Name of restaurant.
 * @property {string} address - Restaurant address.
 * @property {string} phoneNumber - Phone number of the restaurant.
 * @property {number} rating - Restaurant rating.
 * @property {number} user_ratings_total - Total restaurant reviews.
 * @property {Object} coordinates - Geographical coordinates of the restaurant.
 * @property {number} coordinates.lat - Latitude of the restaurant.
 * @property {number} coordinates.lng - Length of the restaurant.
 * @property {Array<string>} photos - Photos of the restaurant.
 */

/**
 * Restaurant model for interaction with the MongoDB database.
 * @typedef {Model} RestaurantModel
 */

/**
 * Define the layout and model of the restaurant using Mongoose.
 * @type {RestaurantModel}
 */
const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phoneNumber: String,
    rating: Number,
    user_ratings_total: Number,
    coordinates: {
      lat: Number,
      lng: Number,
    },
    photos: [],
  },
  { collection: "Restaurants" }
);

/**
 * @description - Restaurant model for interaction with the MongoDB database.
 * @type {RestaurantModel}
 */
const RestaurantModel = mongoose.model("Restaurants", restaurantSchema);

export default RestaurantModel;
