class MovieService {
  static url = " http://localhost:3000/movies";

  static async getmovieDetails() {
    // to fetch data from url -->get api
    return await axios.get(this.url);
  }
  static async getmovieDetailsbyid(id) {
    let res = await axios.get(`${this.url}/${id}`);
    return res.data;
  }
}
export default MovieService;
