import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // NEVER EVER EVER MANIPULATE STATE. 
            // RETURN SOMETHING NEW.
            
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ];
    }
    return state;
}