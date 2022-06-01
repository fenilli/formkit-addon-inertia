# Changelog

### 2.0.0-alpha.4

#### Features

* Added FormKit's node as the second parameter to all inertia event callbacks.

#### BREAKING CHANGE

* Changed event callbacks to replace functionality instead of running after.

### 2.0.0-alpha.3

#### Bug Fixes

* Fixed README and LICENSE not being outputed to npm

### 2.0.0-alpha.2

#### Features

* Added InertiaJS progress as a data attribute to FormKit's form.
* Added backend validation errors to all FormKit's form fields via InertiaJS onError event callback.

### 2.0.0-alpha.1

#### BREAKING CHANGE

* Changed the packages name from `inertiajs-formkit-plugin` to `formkit-inertify`.
* Removed `inertiaOptions` as third parameters to FormKit `@submit`.
* Added to FormKit's `context` an `inertia` property to be used for visits.

#### Features

* Added loading message to FormKit via InertiaJS onStart and onFinish event callbacks.
* Added disabled state to FormKit via InertiaJS onStart and onFinish event callbacks.

### 1.1.0 [DEPRECATED](https://www.npmjs.com/package/inertiajs-formkit-plugin)

#### Features

* Added a third parameter `inertiaOptions` to FormKit form `@submit`.

### 1.0.0 [DEPRECATED](https://www.npmjs.com/package/inertiajs-formkit-plugin)

#### Features

* Added loading message to FormKit via Inertia start and finish hooks
* Added disabled state to FormKit form via Inertia start and finish hooks
