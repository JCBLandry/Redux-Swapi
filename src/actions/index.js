// we'll need axios
import axios from 'axios'
import { dispatch } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';
export const FETCH_CHAR_START = 'FETCH_CHAR_START';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAIL = 'FETCH_CHAR_FAIL';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const pullChar = () =>{
    axios.get(
        'https://swapi.co/api/people/'
    )
    .then(
        res =>{
            dispatch({
                type: FETCH_CHAR_SUCCESS,
                payload: res.data.results
            });
        }
    )

.catch( err =>{
dispatch({
    type: FETCH_CHAR_FAIL,
    payload: err
});
})
}