# SpaceXBrowser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.


## Approach
1. Here the project is Created on Agular framework as there was not restriction on usig any framework. However I can create a similar web experience using Vanilla JS.
2. I have used app.component as a container component and used home.component as my component with all the functionality.
3. I have used Bootstrap for making the app mobile responsive. However, same is possible with Media queries in css.
4. I have used rest-apis.service for all Rest API interactions and storing some shared data / constants.
5. I have also included Unit Test cases for the coverage and the overall project coverage screenshot is attached. (I am using Karma and Jasmine as my test suit.)
6. I have also run the lighthouse report and attached the image of same. The Performance score stand at 80,while all others (Accessibility, Best practices, SEO) stand above 90. (Please note that the performance score is also affected due to slower server response for the give APIs).



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
