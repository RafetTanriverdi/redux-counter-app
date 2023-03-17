import{configureStore} from '@reduxjs/toolkit';
import counterReducer from './Counter/CounterSlice';

export const Store = configureStore({
    reducer:{
        counter:counterReducer,
    },
});

