# MERRnN Generator
Generates skeleton project for Mongo, Express, React, ReactNative, Node

## Installation
* `npm install -g yo`
* `npm install -g generator-merrnn@latest`

## Usage
* Creates a new application using:
  * `yo merrn`

* Change to the directory of your new app:
  * `cd <app_name>`

## Generators

* `yo merrnn:api`
  * Generates a new rest api file based on your mongo db collection name
---

* `yo merrnn:component`
  * Generates a new react component based on the following options:
    * 'Basic Stateless'
    * 'Basic Stateful'
    * 'Advance Stateful'
    * 'Basic Read All'
    * 'Basic Read By Id'
    * 'Basic Create'
    * 'Basic Update By Id'
    
## Running your project
* Server: `npm run server` or `npm run server:w`
* Web: `npm run web` or `npm web:w`
* Mobile: `npm run expo` or `npm run android` or `npm run ios`
