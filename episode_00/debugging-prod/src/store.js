const REQUEST_DATA = 'REQUEST_DATA';

const initialState = {
  loading: false,
  items: []
};

export function requestData() {
  return {
    type: REQUEST_DATA,
    payload: fetch('https://debugging-prod-api.now.sh/items')
      .then(res => res.json())
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case `${REQUEST_DATA}_PENDING`:
      return {
        loading: true,
        items: []
      }
    case `${REQUEST_DATA}_FULFILLED`:
      return {
        loading: false,
        items: action.payload
      }
    default:
      return state;
  }
}
