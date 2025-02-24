Here's a README template you can use for your GitHub repository:

---

# Task Manager API

This is a simple Task Manager API built with Node.js and Express. It allows users to manage tasks by retrieving, adding, updating, and deleting tasks. The API returns tasks as JSON data.

## Features

- **GET /tasks** - Retrieve all tasks
- **GET /tasks/:id** - Retrieve a specific task by ID
- **POST /tasks** - Add a new task
- **PUT /tasks/:id** - Update a specific task by ID
- **DELETE /tasks/:id** - Delete a specific task by ID

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## Endpoints

### GET /tasks
Retrieve all tasks.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Complete Node.js project",
      "description": "Finish the task manager API using Express",
      "completed": false
    },
    ...
  ]
}
```

### GET /tasks/:id
Retrieve a task by its ID.

**Example request:**
```
GET http://localhost:3000/tasks/1
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Complete Node.js project",
    "description": "Finish the task manager API using Express",
    "completed": false
  }
}
```

### POST /tasks
Add a new task.

**Example request body:**
```json
{
  "title": "New Task",
  "description": "Description of the new task",
  "completed": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 4,
    "title": "New Task",
    "description": "Description of the new task",
    "completed": false
  }
}
```

### PUT /tasks/:id
Update a specific task by ID.

**Example request body:**
```json
{
  "title": "Updated Task",
  "description": "Updated description of the task",
  "completed": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Updated Task",
    "description": "Updated description of the task",
    "completed": true
  }
}
```

### DELETE /tasks/:id
Delete a specific task by ID.

**Response:**
```json
{
  "success": true,
  "msg": "Task deleted successfully"
}
```

## Postman Collection





