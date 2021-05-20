class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      // if()
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();