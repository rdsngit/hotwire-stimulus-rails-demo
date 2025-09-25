import { Controller } from "@hotwired/stimulus";

import { Fireworks } from "fireworks-js";

export default class extends Controller {
  connect() {
    const container = document.querySelector("#fireworks-container");
    const fireworks = new Fireworks(container, {
      /* options
        https://github.com/crashmax-dev/fireworks-js?tab=readme-ov-file#options
      */
    });
    fireworks.start();
  }
}
