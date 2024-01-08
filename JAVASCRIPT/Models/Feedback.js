class Feedback {
  set username(uname) {
    this._username = uname;
  }
  set moviename(mname) {
    this._moviename = mname;
  }
  set date(date) {
    this._date = date;
  }
  set amount(amount) {
    this._amount = amount;
  }
  set seat_Count(seat_Count) {
    this._seat_Count = seat_Count;
  }
  set review(review) {
    this._review = review;
  }
  set comment(commment) {
    this._comment = commment;
  }
  get username() {
    return this._username;
  }
  get moviename() {
    return this._moviename;
  }
  get seat_Count() {
    return this._seat_Count;
  }
  get date() {
    return this._date;
  }
  get amount() {
    return this._amount;
  }
  get comment() {
    return this._comment;
  }
  get review() {
    return this._review;
  }
}
export default Feedback;
