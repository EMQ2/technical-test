# Full-Stack Developer Evaluation Tasks

This document outlines the specific tasks you need to complete as part of the evaluation process. Please read through all tasks carefully before starting.

## 1. Backend Modification

### Task 1.1: New API Endpoint
- Create a new API endpoint `/api/v1/analytics` that returns a summary of user activity.
- The summary should include:
  - Total number of active users
  - Number of new users in the last 7 days
  - Top 5 most active users (based on login frequency)
- Implement proper error handling and logging for this endpoint.

### Task 1.2: Unit Testing
- Write comprehensive unit tests for the new API endpoint.
- Ensure at least 80% code coverage for the new functionality.

## 2. Frontend Enhancement

### Task 2.1: New React Native Component
- Create a new `AnalyticsDashboard` component that displays the data from the `/api/v1/analytics` endpoint.
- Add this component to the Storybook with appropriate documentation.

### Task 2.2: Performance Optimization
- Implement memo or useMemo for the `AnalyticsDashboard` component to optimize rendering performance.
- Use the React DevTools Profiler to measure and document the performance improvement.

## 3. API Integration

### Task 3.1: State Management
- Integrate the new analytics API with the frontend using Redux or Context API.
- Implement proper loading, success, and error states for the API call.

### Task 3.2: Error Handling
- Implement a global error boundary for the React Native app.
- Create a user-friendly error message component for API errors.

## 4. Docker Configuration

### Task 4.1: Dockerfile Optimization
- Modify the existing Dockerfile to use multi-stage builds, reducing the final image size.
- Document the before and after image sizes.

### Task 4.2: Environment Variable
- Add a new environment variable `ANALYTICS_CACHE_DURATION` to control how long the analytics data is cached.
- Update the Docker Compose file to include this new variable.

## 5. Database Interaction

### Task 5.1: New Data Model
- Create a new `UserActivity` table/collection to store user login events.
- Implement a mechanism to record a user's login time whenever they authenticate.

### Task 5.2: CRUD Operations
- Implement CRUD operations for the `UserActivity` model.
- Update the `/api/v1/analytics` endpoint to use this new data for its calculations.

## 6. New Feature Implementation

### Task 6.1: Real-time Updates
- Implement real-time updates for the `AnalyticsDashboard` using WebSockets.
- Use the `socket.io` library, which is not currently in the project. You'll need to research and implement this.

## Submission Guidelines

1. Create a new branch named `feature/analytics-dashboard`.
2. Commit your changes with clear, descriptive commit messages.
3. Push your branch to the repository.
4. Create a pull request with a description of all the changes you've made.
5. In the pull request description, also include:
   - Any assumptions you made
   - Any parts you found particularly challenging
   - Any additional improvements you would make if you had more time

Good luck! We're excited to see your implementation.
