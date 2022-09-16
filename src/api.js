import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ShareBnbApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    console.log("token", ShareBnbApi.token);
    const headers = { Authorization: `Bearer ${ShareBnbApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get listings (filtered by name if not undefined) */

  static async getListings(name) {
    let res = await this.request("listings", { name });
    return res.listings;
  }

  // /** Get details on a listing by id. */

  static async getListing(listingId) {
    let res = await this.request(`listings/${listingId}`);
    return res.listing;
  }

  /** Add a listing. */

  static async addListing(data) {
    let resp;
    const headers = {
      Authorization: `Bearer ${ShareBnbApi.token}`,
      "Content-Type": "multipart/form-data",
    };

    try {
      resp = await axios.post(`${BASE_URL}/listings`, data, {
        headers: headers,
      });
    } catch (err) {
      console.error("API Error:", err);
      let message = err.message;
      throw Array.isArray(message) ? message : [message];
    }
    console.log("in api resp", resp);
    return resp.data.listing;
  }

  /** Get list of conversations  */

  static async getConversations() {
    let res = await this.request("messages");
    return res.jobs;
  }

  /** Message a listing owner. */

  static async messageOwner(text, listingId) {
    await this.request(`listings/${listingId}/message`, {text}, "post");
  }

  /** Get token for login from username, password. */

  static async login(data) {
    console.debug("API Call:", "login", data);
    let res = await this.request(`login`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`signup`, data, "post");
    return res.token;
  }

  /** Add a booking. */

  static async book({ listingId, checkIn, checkOut }) {
    let data = {
      checkin_date: checkIn,
      checkout_date: checkOut,
    };

    let res = await this.request(`listings/${listingId}/book`, data, "post");
    return res.booking;
  }
}

export default ShareBnbApi;
