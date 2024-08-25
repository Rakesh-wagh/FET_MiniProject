class User {
  // Settor Methods
  set FullName(FullName) {
    this._FullName = FullName;
  }
  set email(email) {
    this._email = email;
  }
  set phone(phone) {
    this._phone = phone;
  }
  set gender(gender) {
    this._gender = gender;
  }
  set address(address) {
    this._address = address;
  }
  set city(city) {
    this._city = city;
  }
  set state(state) {
    this._state = state;
  }
  set password(password) {
    this._password = password;
  }
  set date_of_birth(date_of_birth) {
    this._date_of_birth = date_of_birth;
  }
  set id(id) {
    this._id = id;
  }
  //  Gettor Methods
  get FullName() {
    return this._FullName;
  }
  get id() {
    return this._id;
  }
  get gender() {
    return this._gender;
  }
  get password() {
    return this._password;
  }
  get phone() {
    return this._phone;
  }
  get email() {
    return this._email;
  }
  get address() {
    return this._address;
  }
  get date_of_birth() {
    return this._date_of_birth;
  }
  get city() {
    return this._city;
  }
  get state() {
    return this._state;
  }
}
export default User;
