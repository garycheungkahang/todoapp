# T3 Interview Test

## terminal 1
cd ./express 
npm i
npm run start

## terminal 2

cd ./my-app
npm i
npm run start

login

name Kyle
password password

time spend
5hrs

## Introduction

You will have to complete a To-Do app within 1.5 hours.

Read through the system requirement carefully and complete the test. Candidates are allowed to install any public npm packages and use any development tool, just to be reminded that the toolings are also part of the evaluation criteria.

Before you start, please run

```shell
git checkout -b [your_name]
```

Please edit this README.md to give instruction on how to start your application.

## Requirements

### System specification

Backend - nodeJS  
Frontend - any (web app prefered)  
No database is allowed  
There will be a shared mount point at ./data, you may store the to-do data in this directory

To-Do application should allow user to  
**Optional tasks' points are scaled with overall points.**

| Feature                                                      | Weight |
| ------------------------------------------------------------ | ------ |
| Add an item                                                  | 5%     |
| Remove an item                                               | 5%     |
| Mark an item done                                            | 5%     |
| Sort items by due date                                       | 10%    |
| Store and persist to-dos across devices                      | 10%    |
| Get back to previous to-dos by bookmarking or saving the url | 10%    |
| Create a new to-do                                           | 5%     |
| (OPTIONAL) Protect to-do with password                       | + 10%  |
| (OPTIONAL) Styled to-do                                      | + 5%   |

## Standard for evaluation

| Category      | Description                                                                           | Weight |
| ------------- | ------------------------------------------------------------------------------------- | ------ |
| Readability   | Does the code easy to read and reasonably separated? Bonus point for using Typescript | 30%    |
| Functionality | Does the program fulfil the requirements?                                             | 50%    |
| Efficiency    | Does the program run smoothly and easy to scale?                                      | 10%    |
| Tooling       | Are the choices of tooling reasonable?                                                | 10%    |
