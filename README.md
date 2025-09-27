# Hotwire Stimulus for Ruby on Rails

This is a Ruby on Rails web app to demo the use of the front-end libraries Hotwire Stimulus along with [fireworks.js](https://fireworks.js.org/).

- Hotwire Stimulus Website: https://stimulus.hotwired.dev/
- Hotwire Stimulus for Ruby on Rails Gem: https://github.com/hotwired/stimulus-rails/

## Setup

Install the Ruby version in the `.ruby-version` file then run the terminal command `bundle install`.

## Run the web app

Using the terminal navigate to the root of the project directory and run the command:

```sh
bin/dev
```

Then open your internet browser, such as Chrome, and visit `http://localhost:3000/`

Click on the buttons to start and stop the fireworks and you can see the JavaScript console logs using your browser dev tools.

## Libraries used

The fireworks visual effects are created using fireworks.js

- https://fireworks.js.org/
- https://github.com/crashmax-dev/fireworks-js/

The JavaScript to load, start and stop the fireworks are located in the Stimulus controller at [`app/javascript/controllers/fireworks_controller.js`](app/javascript/controllers/fireworks_controller.js).

https://github.com/rdsngit/hotwire-stimulus-rails-demo/blob/dc581500cda3701b76135e081b5de400a8c8b8f0/app/javascript/controllers/fireworks_controller.js#L1-L21

The demo app implements Stimulus controllers along with actions and targets that are referenced in the views.

- https://stimulus.hotwired.dev/reference/controllers
- https://stimulus.hotwired.dev/reference/actions
- https://stimulus.hotwired.dev/reference/targets

This Stimulus controller is activated by setting the `data` attribute in the fireworks index view and within this `div` are the buttons with the `data` `actions` to call the fireworks controller's `start` and `stop` functions as well as the fireworks container `div` used for the controller `target` to render the fireworks within.

https://github.com/rdsngit/hotwire-stimulus-rails-demo/blob/480a53f3d668ae762764401478d5e8827a2dfc39/app/views/fireworks/index.html.erb#L7-L12

## Screenshots

![Hotwire Stimulus with Fireworks.js](/screenshots/screenshot-hotwire-stimulus-with-fireworks-js.png)
