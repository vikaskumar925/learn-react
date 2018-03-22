import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import "normalize.css/normalize.css";
import './styles/styles.scss';

const store = configureStore();
// Add Expense --> water Bill
// Add Expense --> Gas Bill
//set text filter -> Bill(2 items) , water(1 items)
store.dispatch(addExpense({description:"Gas Bill", amount:5000, createdAt:1254 }));

store.dispatch(addExpense({description:"Water Bill", amount:4500, createdAt:-7842 }));
store.dispatch(setTextFilter('rent'));

 setTimeout(() => {
     store.dispatch(setTextFilter('water'));
 }, 3000);
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));
