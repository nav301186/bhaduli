export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configRouter(config, router){
    config.title = "login";
    config.map([
      {route: '', moduleId: 'login', title: "login"}
    ])
  }
}
