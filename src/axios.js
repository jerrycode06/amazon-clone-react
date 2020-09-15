import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-3349b.cloudfunctions.net/api ", // The API (cloud function) URL
});
// http://localhost:5001/clone-3349b/us-central1/api

export default instance;
