# Mini User API – Node.js + Express

This is a simple API built with **Node.js** and **Express** that allows basic operations (GET, POST, DELETE) on a list of users.

## How It Works

This API runs on **port 4001** and provides 3 endpoints:

1. `GET /API/user` – Get the list of users  
2. `POST /API/user` – Add a new user  
3. `DELETE /API/user/:id` – Delete a user by their ID

### Sample Data

The API starts with two users:

```json
[
  { "id": "1", "name": "one" },
  { "id": "2", "name": "two" }
]

