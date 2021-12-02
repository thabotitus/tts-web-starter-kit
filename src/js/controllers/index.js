import { Application } from "@hotwired/stimulus";

import HelloController from "./_hello_controller";

const controllers = {
  hello: HelloController,
};

const app = new Application();

Object.keys(controllers).forEach((identifier) =>
  app.register(identifier, controllers[identifier])
);

window.Stimulus = app.start();
