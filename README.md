# Huntweb React Native

Front-End Mobile application inspired by [Product Hunt](https://www.producthunt.com/) made with React Native.

The purpose of this application is to practice the concepts of React Native as seen in the [Rocketseat](https://rocketseat.com.br/) free course.

## Runing it localy

### API

To run this project you need to set up its API (Get the [Back-End](https://github.com/GabrielPeresBernes/Huntweb-NodeJS))

### Emulator

This application can be runed with a Android emulator, to see how to configure the emulator of Android Studio see this [documentation](https://reactnative.dev/docs/environment-setup)

You need to redirect the 3001 port of your android emulator to the 3001 port of your machine. To do this the adb environment variable must be set.

With adb in hands run `adb reverse tcp:3001 tcp:3001`

### NPM / Yarn

Inside the project root directory run `npm install` or `yarn install` to install the project dependencies.

Then run `npm run start` or `yarn start` to start the application.

Next you need to run `npm run android` or `yarn android` to install the app in your emulator.

## Functionality

- **List all resources (with infinite scroll)**

![](index.gif)

- **Show a resource (in a webview)**

![](show.gif)

## Directory Structure

- **android/** (react native android environment configuration)

- **ios/** (react native ios environment configuration)

- **node_modules/** (project dependencies)

- **src/** (main application files, available in development)

  - **config/** (application configuration)

  - **pages/** (application pages)
  
  - **services/** (handles external resources, like api interface)

  - **routes.js** (routes of the application)
  
- **App.js/** (import routes to be rendered)

- **index.js/**
