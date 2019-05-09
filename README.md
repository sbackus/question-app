# README

Hello! My name is Sam. Welcome to question-app
This is a simple Rails & React app for managing questions and answers

To see it running go here: https://quiet-savannah-38806.herokuapp.com/

#Requirements
  Ruby 2.6
  Rails 5.2
  Postgresql 11
  Yarn 1.3

# Get it running locally
## Install gems and packages
  * run $ bundle install
  * run $ yarn install

## Database setup
  * see config/database.yml
  * create a postges user and export the password to an environment variable called  POSTGRES_PASSWORD
  * or
  * update database.yml to work with your local database
  * run $ rails bd:create
  * run $ rails db:migrate
  * run $ rails db:populate_questions_from_csv lib/questions.csv

## run the ruby tests
  * $ rails test

## start the server
  * $ foreman start
  * in your browser go to localhost:5000

- If you have any questions please email me at Samuel.Backus@gmail.com
