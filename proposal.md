## Project Description
Coffee.Tea.Mate 2.0 is an app for people to make friends in a coffee shop.
Other dating apps might have problems like 
- People only want to meet in bars/personal places
- People disappeared after chatting for a while
- Lazy to meet up, don’t know where to meet
This app can fix these problems, use it in a coffee shop/tea house you will meet people already in the same space who also wants to make friends, and it will be a safe place to make friends with strangers.

It's a remake of my old project, the new feature includes:
Chat room 
QR Code access
Responsive layout
Original App: https://project3-mate.herokuapp.com/?Search=mark

## Tech stack 
### frontend
HTML
CSS
ReactJS

### backend
NodeJS
Express

### database
Firebase(New Technology)
MySQL(New Technology)

### deploy
Heroku

## Backend models and their properties
User
- Image(String, default)
- Username(String, required)
- Gender(String)
- Age(Integer)
- Description(String)
- Chat(Boolean, required)

Chatroom
- Username(String, required)
- Chat(Boolean, required)

## React component hierarchy
App/Landing
- Home
-- Cards
- Navbar
-- Form(Create/Edit/Delete)
-- Friends(Create/Edit/Delete)
-- Chatroom
--- Chat list
--- Chat window

## User stories
### MVP Goals
- As a user I want to scan a QR code to enter the app from my phone
- As a user I want to create a profile
- As a user I want to update my profile
- As a user I want to delete my profile
- As a user I want to see other people
- As a user I want to click on a button to show people that I'm available to chat
- As a user I want to chat with people in private messages who are available to chat

### Strength Goals
- As a user I want to filter search people from their gender/age and if their status is available to chat
- As a user I want to only see people in the chatroom while they are using the same wifi(from coffee shops)
- As a user I want to have some ice-breaking games in the app that I can play with other people
- As a user I want to chat with all the users in public who are available to chat
- As a user I want to see Github repo/reference links in footer

## Wireframes
![image](https://imgur.com/2vlteSU.png)
![image](https://imgur.com/g0TEWcr.png)
![image](https://imgur.com/85DVsWd.png)
