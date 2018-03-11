import { createStore , combineReducers } from 'redux';
import uuid from 'uuid';

//Add_Expense
const addExpense = (
    {
        description='',
        note='',
        amount = 0,
        createdAt =0
    } = {}
) => ({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt,
    }
});
//Remove_Expense

const removeExpense = ( { id } = {}) => ({
    type:"REMOVE_EXPENSE",
    id,
});
//Edit_Expense
//Set_Text_Filter
//Sort_By_Date
//Sort_By_Amount
//Set_Start_Date
//Set_End_Date

//Expense Reducers
const expenseReducerDefaultState =[];
const expenseReducer = (state = expenseReducerDefaultState, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense,
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id!== action.id );
        default:
            return state;
    }
};
//Filters Reducers
const filtersDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined,
};
const filterReducer = (state = filtersDefaultState, action ) => {
    switch(action.type){
        default:
            return state;
    }
};

// store creation
const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer,
    })
);
store.subscribe(() => {
    console.log(store.getState());
});
const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, }));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:1400, }));

store.dispatch(removeExpense({ id : expenseOne.expense.id }));
const demoState = {
    expenses :[{
        id: 'asdasdasf',
        description:'January Rent',
        note : 'This was final payment for that address',
        amount:54500,
        createdAt :0,
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate : undefined,
        endDate : undefined,
    },
};
