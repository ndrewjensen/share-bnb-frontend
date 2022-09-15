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
    // const headers = { Authorization: `Bearer ${ShareBnbApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    // data.token = ShareBnbApi.token;

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  // static async getCurrentUser(username) {
  //   let res = await this.request(`users/${username}`);
  //   return res.user;
  // }

  /** Get listings (filtered by name if not undefined) */

  static async getListings(name) {
    let res = await this.request("listings", { name });
    return res.listings;
  }

  // /** Get details on a company by handle. */

  // static async getCompany(handle) {
  //   let res = await this.request(`companies/${handle}`);
  //   return res.company;
  // }

  // /** Get list of jobs (filtered by title if not undefined) */

  // static async getJobs(title) {
  //   let res = await this.request("jobs", { title });
  //   return res.jobs;
  // }

  // /** Apply to a job */

  // static async applyToJob(username, id) {
  //   await this.request(`users/${username}/jobs/${id}`, {}, "post");
  // }

  /** Get token for login from username, password. */

  static async login(data) {
    console.debug("API Call:", 'login', data);
    let res = await this.request(`login`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`signup`, data, "post");
    return res.token;
  }

  /** Save user profile page. */

  // static async saveProfile(username, data) {
  //   let res = await this.request(`users/${username}`, data, "patch");
  //   return res.user;
  // }
}


export default ShareBnbApi;
