# \</PLUS> Web領域教學研發推廣網頁
<div style="text-align:center"><img src="https://i.imgur.com/1m8yA0o.png"/></div>

**Deployed Site:**
[http://slash-plus-demo.herokuapp.com/](http://slash-plus-demo.herokuapp.com/)
## Dependencies
* [Angular CLI](https://github.com/angular/angular-cli) 8.1.2
* [Babel](https://babeljs.io) 7.8.7

## Usage
Install all dependencies:
```
npm install
```
Run debugging server:
```
ng serve
```
Browse the webpage on `http://localhost:4200/`

## Build

Run building command:
```
ng build // normal build
ng build --prod // production build
```

## Deploy on Heroku
Login your [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli):
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

## Contributer

* Han Hsuan Lin, NCCU, 2019