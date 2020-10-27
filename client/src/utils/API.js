import axios from "axios";

export default {
  getMessages: function () {
    return axios.get("API/Message");
  },
};
