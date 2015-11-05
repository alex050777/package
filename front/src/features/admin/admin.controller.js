export default class AdminController {
  constructor(UserService) {
    let self = this;
    this.users = [];
    this.UserService = UserService;
    UserService.loadUsers().then((users) => {
      self.users = users;
    })
  }

  createUser(user) {
    this.UserService.createUser(user).then((userReturned) => {
      this.users.push(userReturned)
    })
  }

  deleteUser(userName) {
    console.log("calling delete user")
    this.UserService.deleteUser(userName).then((userReturned) => {
      console.log("delete user called")
      _.remove(this.users, (user) => {
        return user.name == userName;
      });
    })
  }
}

AdminController.$inject = ['UserService'];
