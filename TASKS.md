# Tasks
## My Progress

Mark the tasks you have completed with an `x` in the checkbox. This is required for your submission to be reviewed.
- [x] Task 0: Run the Existing Application
- [ ] Task 1a: Implement the "Get Task" API in Backend TaskController
- [ ] Task 1b: Implement the "Delete Task" API in Backend TaskController
- [ ] Task 1c: Implement the "Update Task" API in Backend TaskController
- [ ] Task 2: Implement the "Delete Task" Feature in Frontend
- [ ] Task 3: Extend the Application's Backend APIs to handle sub-tasks
- [ ] Task 4: Extend the Application's Frontend to create and display sub-tasks
- [ ] Task 5: Open-Ended Question (Performance)
- [ ] Task 6: Open-Ended Question (Security)

## Notes

You need not use the Registration and Login Controllers.

## Task 0: Run the Existing Application
### Description
Run the existing application in Gitpod and review the codebase.
### Steps
1. Open the "Terminal" tab in Gitpod in the bottom panel.
2. You should already see 4 terminal windows open:
   - Services: Docker Compose Services (Redis, MariaDB)
   - Backend: Java Spring Boot application
   - Frontend: React JS application
   - Frontend: Storybook for React components
3. When you modify any file in the codebase, the application will automatically reload. If you encounter any issues, you can navigate to the respective terminal window and restart the service by pressing `Ctrl + C` and `Up Arrow` followed by `Enter` to run the command again.
4. You can access the following services:
   - Port 8080: Swagger UI for Backend APIs
   - Port 3000: Frontend React JS Application
   - Port 6006: Frontend Storybook for React Components
5. When navigating to Port 8080, you will see the following screen:
   ![Backend Swagger UI](./docs/img/Backend%20Swagger%20UI.png)
6. When navigating to Port 3000, you will see the following screen:
   ![Frontend React JS Application](./docs/img/Frontend%20React%20JS%20Application.png) and be able to enter any text to add a new item to the To Do List.
7. When navigating to Port 6006, you will see the following screen:
    ![Frontend Storybook for React Components](./docs/img/Frontend%20Storybook%20for%20React%20Components.png)
6. Review the existing codebase and software architecture before proceeding to the next task.

## Task 1a: Implement the "Get Task" API in Backend TaskController
### Description
Implement the `GET /tasks/{id}` API in the `TaskController` to retrieve a specific task by its ID.
### Steps
1. Open the `TaskController.java` file located at `./backend/src/main/java/com/example/backendapplication/controller/TaskController.java`.
2. Implement the method corresponding to the `GET /tasks/{id}` API to retrieve a specific task by its ID.
3. Your solution should not be more than 10 lines of code.
4. Test your implementation by:
   1. Navigating to the Swagger UI at Port 8080 and first calling the `POST /tasks` API to create a new task. 
   2. Then, call the `GET /tasks/{id}` API with the ID of the task you created to verify that the task is retrieved successfully.
   3. Uncomment the `testGetTask` test case in the `TaskControllerTest.java` file located at `./backend/src/test/java/com/example/backendapplication/controller/TaskControllerTest.java`
   4. Run unit tests to ensure that the API is working as expected by running the following command in the a new terminal from the `backend` directory: `mvn test`, ensuring all tests pass.

## Task 1b: Implement the "Delete Task" API in Backend TaskController
### Description
Implement the `DELETE /tasks/{id}` API in the `TaskController` to delete a specific task by its ID.
### Steps
1. Open the `TaskController.java` file located at `./backend/src/main/java/com/example/backendapplication/controller/TaskController.java`.
2. Implement the method corresponding to the `DELETE /tasks/{id}` API to delete a specific task by its ID.
3. Your solution should not be more than 10 lines of code.
4. Test your implementation by:
   1. Navigating to the Swagger UI at Port 8080 and first calling the `POST /tasks` API to create a new task. 
   2. Then, call the `DELETE /tasks/{id}` API with the ID of the task you created. 
   3. Then call the `GET /tasks` API to verify that the task has been deleted successfully.
   4. Uncomment the `testDeleteTask` test case in the `TaskControllerTest.java` file located at `./backend/src/test/java/com/example/backendapplication/controller/TaskControllerTest.java`
   5. Run unit tests to ensure that the API is working as expected by running the following command in the a new terminal from the `backend` directory: `mvn test`, ensuring all tests pass.

## Task 1c: Implement the "Update Task" API in Backend TaskController
### Description
Implement the `PUT /tasks/{id}` API in the `TaskController` to update a specific task by its ID.
### Steps
1. Open the `TaskController.java` file located at `./backend/src/main/java/com/example/backendapplication/controller/TaskController.java`.
2. Implement the method corresponding to the `PUT /tasks/{id}` API to update a specific task by its ID.
3. Your solution should not be more than 10 lines of code.
4. Test your implementation by:
   1. Navigating to the Swagger UI at Port 8080 and first calling the `POST /tasks` API to create a new task. 
   2. Then, call the `PUT /tasks/{id}` API with the ID of the task you created and provide the updated task details. 
   3. Then call the `GET /tasks/{id}` API to verify that the task has been updated successfully.
   4. Uncomment the `testUpdateTask` test case in the `TaskControllerTest.java` file located at `./backend/src/test/java/com/example/backendapplication/controller/TaskControllerTest.java`
   5. Run unit tests to ensure that the API is working as expected by running the following command in the a new terminal from the `backend` directory: `mvn test`, ensuring all tests pass.

## Task 2: Implement the "Delete Task" Feature in Frontend
### Description
Implement the "Delete Task" feature in the Frontend React JS application to delete a specific task by its ID.
### Steps
1. Open the `TaskItem.tsx` file located at `./frontend/src/components/TaskItem.tsx`.
2. Add a cross icon or a "Delete" button next to each task item in the To Do List.
3. Implement the logic to delete a specific task by its ID when the "Delete" button is clicked.
4. Your solution should not be more than 25 lines of code.
5. Test your implementation by:
   1. Navigating to the Frontend React JS application at Port 3000.
   2. Add a new task to the To Do List.
   3. Click on the "Delete" button next to the task to delete it.
   4. Verify that the task has been deleted successfully from the To Do List.
6. Ensure that the application is working as expected and that the task has been deleted successfully.
7. Write unit tests to ensure that the feature is working as expected.
8. Run the following command in a new terminal from the `frontend` directory: `npm test`, ensuring all tests pass.

## Task 3: Extend the Application's Backend APIs to handle sub-tasks
### Description
Extend the existing application APIs to handle sub-tasks for each task.
### Steps
1. Create corresponding files for the `Subtask` (e.g. model, repository, service, service implementation).
2. Add a new field `List<Subtask>` in `Task.java` model to represent sub-tasks for each task.
3. Create a `SubtaskController` to handle sub-tasks for each task.
4. Implement the following APIs:
   - `GET /tasks/{id}/subtasks`: Retrieve all sub-tasks for a specific task.
   - `POST /tasks/{id}/subtasks`: Create a new sub-task for a specific task.
   - `DELETE /tasks/{id}/subtasks/{subtaskId}`: Delete a specific sub-task for a specific task.
5. Test your implementation by:
    1. Navigating to the Swagger UI at Port 8080 and first calling the `POST /tasks` API to create a new task. 
    2. Then, call the `POST /tasks/{id}/subtasks` API with the ID of the task you created to add a new sub-task.
    3. Then call the `GET /tasks/{id}/subtasks` API to verify that the sub-task has been added successfully.
    4. Then call the `DELETE /tasks/{id}/subtasks/{subtaskId}` API to delete the sub-task.
6. Write unit tests in `SubTaskControllerIntegrationTest.java` to ensure that the APIs are working as expected.
7. Run the following command in a new terminal from the `backend` directory: `mvn test`, ensuring all tests pass.

## Task 4: Extend the Application's Frontend to create and display sub-tasks
### Description
Extend the existing application frontend to create and display sub-tasks for each task.
### Steps
1. Open the `TaskItem.tsx` file located at `./frontend/src/components/TaskItem.tsx`.
2. Add a new section to display sub-tasks for each task.
3. Implement the logic to create a new sub-task for a specific task.
4. Implement the logic to display all sub-tasks for a specific task.
5. Your solution should not be more than 50 lines of code.
6. Test your implementation by:
    1. Navigating to the Frontend React JS application at Port 3000.
    2. Add a new task to the To Do List.
    3. Add a new sub-task to the task.
    4. Verify that the sub-task has been added successfully and is displayed under the task.
7. Ensure that the application is working as expected and that the sub-tasks are displayed correctly.
8. Write unit tests to ensure that the feature is working as expected.
9. Run the following command in a new terminal from the `frontend` directory: `npm test`, ensuring all tests pass.

## Task 5: Open-Ended Question (Performance)
### Description
Given that this application will be widely used by many users, discuss how you would optimize the performance of the application, both on the backend and frontend.

### Your Response
Your Response Goes Here

## Task 6: Open-Ended Question (Security)
### Description
Assuming users of this application would need to sign up for an account an log in before using this application, what are some common security vulnerabilities that could affect this application and how would you mitigate them?

### Your Response
Your Response Goes Here


Upon completion of the tasks, you will have demonstrated your ability to:

- ✅ Review, understand and run an existing codebase.
- ✅ Implement new features in Java Spring Boot and React JS applications.
- ✅ Write unit tests to ensure the correctness of your implementations.
- ✅ Extend the application's frontend UI and backend APIs to handle sub-tasks.
- ✅ Discuss performance optimization and security considerations in a full-stack application.
- ✅ Submit your work for review via a Github pull request.

Good luck! 🚀

