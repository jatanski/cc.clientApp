class BaseModel {
  static baseApiUrl = "http://localhost:8000/api/";

  static getAuthTokenHeaderObj() {
    return { "x-auth-token": this.getAuthToken() };
  }

  static saveAuthToken(token) {
    localStorage.setItem("reactAppToken", token);
  }

  static save(where, what) {
    localStorage.setItem(where, JSON.stringify(what));
  }

  static load(what) {
    return JSON.parse(localStorage.getItem(what));
  }

  static isUserLoggedIn() {
    return (
      localStorage.getItem("user") && localStorage.getItem("reactAppToken")
    );
  }

  static getAuthToken() {
    return localStorage.getItem("reactAppToken");
  }

  static onLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("reactAppToken");
  }
}

export default BaseModel;
