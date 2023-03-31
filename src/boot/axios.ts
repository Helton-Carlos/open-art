import axios from "axios";

const baseURL = "http://localhost:5000/api/users";

const { data: { users } } = await axios.get(baseURL)

export default users;
