class EventService {
  static url = " http://localhost:3000/events";

  static async geteventDetails() {
    // to fetch data from url -->get api
    return await axios.get(this.url);
  }
  static async geteventDetailsbyid(id) {
    let res = await axios.get(`${this.url}/${id}`);
    return res.data;
  }
}
export default EventService;
