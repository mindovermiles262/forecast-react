import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type) {
  case FETCH_WEATHER: 
    // DO NOT MODIFY state, Instead Create a new state
    // return state.push([ action.payload.data ]) // NO NO NO!

    // return state.concat([action.payload.data]) // concat returns new STATE object
    return [ action.payload.data, ...state ] // => [city, city, city, city]
  }
  return state;
}
