# \</PLUS> - Programming Learning for University Students
![PLUS home icon](https://i.imgur.com/1m8yA0o.png)

Mid-Fi prototype website of **\</PLUS> Programming Learning for University Students** project, presented by **National Chengchi University, Taiwan**. Developed as a single page application (SPA) using Angular Framework.

**Deployed Site:**
[http://slash-plus-demo.herokuapp.com/](http://slash-plus-demo.herokuapp.com/)

## Features
* Single Page Applicaiton using Angular

## Dependencies
* [Angular CLI](https://github.com/angular/angular-cli) 8.1.2 -> Frontend Framework
* [Babel](https://babeljs.io) 7.8.7 -> Convert Javascript ES6 Script to ES5
* [Express](https://expressjs.com) 4.17.1 -> Backend Framework
* [Bootstrap](https://getbootstrap.com) 4.3.1 -> Frontend CSS Library
* [RxJS](https://rxjs.dev) 6.4.0 -> Redux Library for Javascript

## Getting Started
### Usage
Install all dependencies:
```
npm install
```
Run debugging server:
```
ng serve
```
Browse the webpage on `http://localhost:4200/`

### Build

Run building command:
```
ng build // normal build
ng build --prod // production build
```

## Deployment
Log into your [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli):
```
heroku login
```
Add heroku app remote git path to your local repo:
```
heroku git:remote -a <your-app-name>
```
Push to heroku and deploy:
```
git push heroku master
```

## Author
* **Han-Hsuan Lin**, *Dept. of Computer Science, National Chengchi University* - [105703004@nccu.edu.tw](mailto:105703004@nccu.edu.tw)

## Declaration
This prototype is built for research and further development only.
Han-Hsuan Lin, 2019, Natioanal Chengchi University