import axios from 'axios';

import {
    FETCHING_API_DATA,
    FETCHING_API_DATA_SUCCESS,
    FETCHING_API_DATA_FAIL,
} from './../utils/actions_types';
import {
    apiBaseURL,
    apiKey
} from "../utils/constants";

const initialState = {
    city: '',
    weather: [],
    error: ''
};
const rootReducer = (state = initialState, action) => {
    const dispatch = action.dispatch;
    switch (action.type) {
        case "FETCHING_API_DATA":
            axios.get(`${apiBaseURL}/forecast?q=${action.payload}&appid=${apiKey}`)
                .then(res => res.data)
                .then(res => {
                    dispatch({ type: FETCHING_API_DATA_SUCCESS, payload: res })
                })
                .catch(res => {
                    dispatch({ type: FETCHING_API_DATA_FAIL, payload: res })
                });
            break;

        case "FETCHING_API_DATA_SUCCESS":
            return {
                ...state,
                city: action.payload.city,
                weather: action.payload.list
            };

        case "FETCHING_API_DATA_FAIL":
            return {
                ...state,
                error: action.payload
            };
    }
};

export default rootReducer;