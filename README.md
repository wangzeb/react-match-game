https://jscomplete.com/learn/1rd-reactful (Samer Buna)

-npm init
-npm i express
-npm i react react-dom
-npm i webpack webpack-cli
-npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react
-npm i -D nodemon
-npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
-npm i -D jest babel-jest react-test-renderer

-stucture
/dist
main.js
/src
index.js
components/App.js
server/server.js

-webpack.config.js
-scripts: package.json
"dev-bundle": "webpack -w -d"
The -w flag in the command above is to run Webpack in watch mode as well and the -d flag is a set of built-in configurations to make Webpack generate a development-friendly bundle.
Run Webpack with -p in production.

-npm run dev-server
-npm run dev-bundle
