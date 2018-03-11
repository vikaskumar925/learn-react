import { createStore } from 'redux';

const store =  createStore((state = {count:0 }, action) => {
    switch(action.type){
        case "INCREMENT":
            const incrementBy = (typeof action.incrementBy === "number") ? incrementBy : 1;
            return {
                count:state.count + incrementBy,
            };
        case "DECREMENT":
            const decrementBy =  (typeof action.decrementBy === "number") ? decrementBy :1;
            return {
                count:state.count - decrementBy ,
            };
        case "RESET":
            return {
                count:0,
            };
        case "SET":
            return {
                count:action.count,
            };
        default:
            return state;
    }

});
const unsubscibe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
    type:'INCREMENT',
    incrementBy:5,
});

store.dispatch({
    type:'INCREMENT',
});

// store.dispatch({
//     type:"RESET",
// });
store.dispatch({
    type:'DECREMENT',
    decrementBy:10,
});
store.dispatch({
    type:'SET',
    count:101,
});

console.log(store.getState());
