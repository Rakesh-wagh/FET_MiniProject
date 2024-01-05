class FeedbackService {
  static url = " http://localhost:3000/Feedback";
  static async addFeedbackDetails(User_feedback) {
    // post api for insertion
    return await axios.post(this.url, User_feedback);
  }
  static async getFeedbackDetails() {
    // to fetch data from url -->get api
    return await axios.get(this.url);
  }
}
export default FeedbackService;
