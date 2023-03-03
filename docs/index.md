---
layout: page
title: Index
permalink: /
---

[![GitHub Repo stars](https://img.shields.io/github/stars/juanDmedina/rntemplate.github.io?color=%2361dbfb&style=for-the-badge&logo=github)](https://github.com/juanDmedina/rntemplate.github.io/stargazers/) [![GitHub Repo Forks](https://img.shields.io/github/forks/juanDmedina/rntemplate.github.io?color=%2361dbfb&style=for-the-badge&logo=github&label=Forks)](https://github.com/juanDmedina/rntemplate.github.io/network/members)

# A React Native Template


## Previous requirements

- Knowledge of Javascript or Typescript and React.

##  Environment Setup

- You can find the environment setup in the [official documentation](https://reactnative.dev/docs/environment-setup)

In general: 

- ```(For this project we will use React Native CLI.)```
- Windows (Configure the ANDROID_HOME environment variable)
- Node
- JDK 11
- Android Studio
- Android Virtual Device or Emulator with SDK 33

## Creating a new application

*Requirements: Typescript*

- If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues:

   - ```bash
     npm uninstall -g react-native-cli @react-native-community/cli
     ```

- React Native has a built-in command line interface, which you can use to generate a new project with typescript. You can access it without installing anything globally using npx, which ships with Node.js. Let's create a new React Native project:

   - ```bash
     npx react-native init <projectName> --template react-native-template-typescript
     ```

![Example](/rntemplate.github.io/assets/inital-projectpng.png)


## Getting Started

1. Clone this repository
1. Make sure [Node](https://nodejs.org/en/) is installed
1. Navigate to the src directory

   - ```bash
     "C:\Users\<username>\Documents\<projectdirectory>\<projectname>"
     ```

1. Open your project and install the dependencies

   - ```bash
     npm install
     ```
1. Start the metro server and run project

    - ```bash
        npx react-native run-android
        ```
    or 
    
    - ```bash
        npm start
        ```

[![Next]][NextShield]


[Next]: https://img.shields.io/badge/-Next-blue
[NextShield]: /structure.md