# Crud Api with Node.js
A restful API in Node.js with token-based authentication. This project uses a blog-like CRUD system.

## Install

``` bash
# clone the repository
git clone https://github.com/samuelguebo/crud-api-nodejs.git

# install dependencies
npm install
```
## Configure
Global variables such as server port or token secret can be set in `app/utils/config.js`

## Start the app

``` bash
# start the server
node server

# instead, you can start the server with nodemon
nodemon server
```
## Features
### Initial data seed
On first run the app is populated with some initial data: posts, users, categories

### Restful API
An api with the following routes
* /posts
* /categories
* /users

### Token authentication
An authentication system is included using the [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) library. 
* `/authentication` generates a token if valid `username` and `password` are provided via Post
* `/users` is protected by the token authentication system

## License and credits

The project is released for free under the terms of the GNU General Public License version 2
and some parts under their respective licenses. In general words, feel free and encouraged to use, modify and redistribute this theme however you like. You may remove any copyright references (unless required by third party components) and crediting is not necessary. It is offered free of charge. Unless otherwise specified, all the files, scripts and images are licensed under [GNU General Public License version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).


# Contributors
 * Samuel Guebo ([@samuelguebo](http://samuelguebo.co))