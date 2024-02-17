# Redux Thunk Async Actions Example

This repository contains an example of using Redux Thunk middleware to handle asynchronous actions in a Redux application. In this example, we fetch user data from a remote API and update the Redux store state accordingly.

## Installation

To run this example, make sure you have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/redux-thunk-async-actions.git
    ```
    b

2. Navigate to the project directory:

    ```bash
    cd redux-thunk-async-actions
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

## Overview

The example consists of the following files:

- `asyncActions.js`: The main JavaScript file that demonstrates the usage of Redux Thunk middleware.
- `package.json`: Contains project metadata and dependencies.

## Usage

The `asyncActions.js` file sets up a Redux store with middleware to handle asynchronous actions. Here's a brief overview of the code:

- **Imports**: Necessary modules such as `redux`, `redux-thunk`, and `axios` are imported.
- **Initial State**: Defines the initial state of the Redux store, including properties like `loading`, `users`, and `error`.
- **Action Types and Action Creators**: Defines action types (`FETCH_USERS_REQUEST`, `FETCH_USERS_SUCCESS`, `FETCH_USERS_FAILURE`) and corresponding action creator functions.
- **Reducer**: Defines a reducer function to specify how the application's state changes in response to actions.
- **Thunk Action Creator**: Defines a thunk action creator (`fetchUsers`) that returns a function instead of an action object. This function dispatches multiple actions asynchronously based on the outcome of an HTTP GET request.
- **Creating Redux Store**: Creates a Redux store using `redux.createStore` and applies middleware (`thunkMiddleware`) using `applyMiddleware`.
- **Store Subscription and Dispatching Action**: Sets up a store subscription to log the current state whenever it changes and dispatches the `fetchUsers` action to initiate the process of fetching users from the API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
