class UserSingleton {
    constructor() {
      this.user = null;
    }
  
    setUser(user) {
      this.user = user;
    }
  
    getUser() {
      return this.user;
    }
  }
  
  const userSingleton = new UserSingleton();
  
  export default userSingleton;
  