React Starter Kit
Guide

This starter kit is intended for creating a quick React development Environment.

Package includes the following: 

npm - awesome package manager that provides a lot of goodies that you will need for our project without navigating througout the web to search for everything.

Babel - Converts ES6 (ECMAScript 6) to ES5. ES5 is generally accepted by all browsers while ES6 is approx. accepted by 95% of all browsers. 

Reference: http://es6-features.org/

BEFORE YOU START YOU MUST HAVE:
	1) Github account or similar
	2) Create a Git Repo to store your code (aka: YOUR_GIT_REPO), moving forward.
	3) Remember your computer password because we will need it after every "sudo" action. 

STEP #1: 

Let's create our directory to house all our stuff. 

Terminal Inputs: (do not enter the "1).. ect.")

	1)  mkdir react_starter_kit
	2)  cd react_starter_kit
	3)  touch README.md
	4)  git init
	5)  git add . 
	6)  git commit -m "initial commit"
	7)  git remote add origin YOUR_GIT_REPO
	8)  git push -u origin master

STEP #2: 

Let's create our npm packages dependicies manager

	1) npm init -y	
	2) touch .gitignore
	3) git add .
	4) git commit -m "add npm package.json that tracks our dependicies"
	5) git status
	6) git push

STEP #3:

Let's install Babel:
	
	1) sudo npm install --save babel-core
	2) enter your computer password
	3) sudo npm install --save babel-preset-latest
	4) sudo npm install --save babel-preset-react




