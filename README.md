
# Todo List API with NextJS

This project is a tutorial for creating a CRUD API for a simple todo list application using NextJS. It demonstrates setting up a NextJS project, defining API routes, and documenting these APIs using modern technologies. You can use the application by visiting [here](https://todo-api-one-tan.vercel.app).

## Learning Objectives
Through this project, you will learn:
1. **Project Setup:** How to configure a basic NextJS application suitable for API development.
2. **API Requests Configuration:** Designing and implementing CRUD (Create, Read, Update, and Delete) operations.
3. **API Documentation:** Automatically generating and maintaining API documentation using Redoc.

## Prerequisites
- Node.js installed on your system.
- Basic knowledge of React and JavaScript.

## Installation
To get this project up and running, follow these steps:
1. Clone this repository.
   ```bash
   git clone https://github.com/taylor-lindores-reeves/todo-api
   ```
2. Enter the project directory.
   ```bash
   cd todo-api
   ```
3. Install dependencies.
   ```bash
   bun install
   ```

## Running the Application
- **Development Environment:**
  ```bash
  bun run dev
  ```
  This launches the development server with hot-reloading enabled.

- **Production Build:**
  ```bash
  bun run build
  bun start
  ```
  This generates a production build and starts the application in production mode.

## Understanding the Project Structure
- **API Endpoints:** Located under the `src/app/api` directory, where each file represents specific API operations.
- **Frontend Components:** The components for UI are managed under the `src/components` directory.
  
## API Documentation
To view the API documentation:
1. Ensure the application is running.
2. Navigate to `/docs` on your browser to view the Redoc-generated API documentation.

## Features
- **CRUD Operations:** APIs to create, read, update, and delete todos.
- **Validation:** Ensuring data integrity with schemas and validation provided by Next Rest Framework.
- **API Documentation:** Auto-generated and structured with Redoc, making it easy to understand and use the endpoints.