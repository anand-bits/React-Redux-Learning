
const redux = require('redux')

const createStore= redux.createStore


// Created the action for redux now we have to create the reducer.

const BUY_CAKE= 'BUY_CAKE'



 function buyCake()
 {

    return {
        
            type:BUY_CAKE,
            info:"First Redux action"
        
    }
 }


 // (PreviousState, action)=> new State.



 // This is the PreviousState so it will be used in the reducer.

 const intialState={
    numOfCakes:10
 }


// Created the reducer with creating the arrow function using the previous state and action


const reducer=(state=intialState,action)=>
{
     switch(action.type)
     {
       
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }

        default:return state
     }
}


// Creating the store.......


const store=createStore(reducer)

console.log("Intial State", store.getState())

const unsubscribe=store.subscribe(()=>
{
    console.log("Updated state",store.getState())


})


store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());



unsubscribe()


// Now we have to Handle based on The Action