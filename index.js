

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
        case BUY_CAKE:return{
            numOfCakes:state.numOfCakes-1
        }

        default:return state
     }
}
