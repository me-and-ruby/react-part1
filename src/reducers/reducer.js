import React from 'react'
import action from "../actions/action";

function reducer(state,action) {
    switch(action.type){
        case "ADD_NAME":
            return {
                name:action.name
            }
        default:
            return state

    }
}

export default reducer
