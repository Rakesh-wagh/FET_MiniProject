class UserService {
  static url = " http://localhost:3000/Users";
  static async addUsersDetails(user) {
    // post api for insertion
    return await axios.post(this.url, user);
  }
  static async getUserDetails() {
    // to fetch data from url -->get api
    return await axios.get(this.url);
  }
  static async getUserDetailsbyid(id) {
    let res = await axios.get(`${this.url}/${id}`);
    return res.data;
  }
  static async updatePassword(data) {
    let response = await axios.put(this.url + "/1", data);
    return response.data;
  }
}
export default UserService;
