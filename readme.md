Cake Shop scenario:-


Shop is store and hold the state of ur application.


Intention to buy the cake is action of redux and Describes what happened.


Shopkeeper is the reducer which ties the store and actions together.


A store that holds the state of your application.

An action that describes the changes in the state of the application.

A reducer which actually carries out the state transition depending upon the action.



The three Principle of The  React:----


Redux Store--------------------------------------- 

Responsibilites:----


Holds Application state

Allows access to state via getState()

Allows state to be updated via dispatch(action)

Registers Listeners via Subscribe



The flow of The  Redux are:--

Here's a typical flow of how the Redux store works:

Initialization: You create a Redux store by passing a reducer function to the createStore() function. This initializes the store with the initial state returned by the reducer.

Dispatching Actions: When an action needs to be performed (e.g., a user interaction or an asynchronous operation completing), you dispatch an action using the dispatch(action) method of the store.

Handling Actions: The store sends the dispatched action to the reducer function. The reducer function determines how the state should be updated based on the action type and returns a new state.

Updating State: The store updates its state with the new state returned by the reducer.

Notifying Subscribers: If there are any subscribed listeners, the store notifies them about the state change.

Accessing State: Components can access the current state of the store using the getState() method.

Unsubscribing Listeners: If listeners are no longer needed (e.g., when a component is unmounted), they can unsubscribe from the store using the function returned by the subscribe() method.