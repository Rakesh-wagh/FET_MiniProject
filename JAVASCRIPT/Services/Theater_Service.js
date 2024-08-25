class TheaterService {
  static url = "http://localhost:3000/theaters";

  static async getTheaterDetails() {
    return await axios.get(this.url);
  }
}

export default TheaterService;
