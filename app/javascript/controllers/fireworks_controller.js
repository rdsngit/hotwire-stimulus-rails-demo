import { Controller } from "@hotwired/stimulus";

import { Fireworks } from "fireworks-js";

export default class extends Controller {
  static targets = ["container"];

  connect() {
    this.fireworks = new Fireworks(this.containerTarget, {
      /* options
        https://github.com/crashmax-dev/fireworks-js?tab=readme-ov-file#options
      */
    });
    this.start();
  }

  start() {
    this.fireworks.start();
    console.log("fireworks started");
  }

  stop() {
    this.fireworks.stop();
    console.log("fireworks stopped");
  }
}
