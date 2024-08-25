class SportService {
  static url = " http://localhost:3000/sports";

  static async getsportDetails() {
    // to fetch data from url -->get api
    let response = await axios.get(this.url);
    return response;
  }
  static async getsportDetailsbyid(id) {
    let res = await axios.get(`${this.url}/${id}`);
    return res.data;
  }
}
export default SportService;
