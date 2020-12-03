import { createAction, handleActions } from 'redux-actions';
import { recommendService } from './recommend.service'
// import { alertActions } from '../../alert.action'

// Action Types
// import history from '../history'

export const recommendConstants = {
    RECOMMEND_REQUEST: 'RECOMMEND_GET_REQUEST',
    RECOMMEND_SUCCESS: 'RECOMMEND_GET_SUCCESS',
    RECOMMEND_FAILURE: 'RECOMMEND_GET_FAILURE',
}

export const getRecommendSuccess = createAction(recommendConstants.RECOMMEND_SUCCESS);

// Initial State
const initialState = {
    recommends: [] 
}

// Reducer
const recommendReducer = handleActions(
    { [recommendConstants.RECOMMEND_SUCCESS]: (state, action) => ({ recommends: action.recommends }),
 },
    initialState
  )

  //Action
  export const recommendActions = {
    getRecommend

  }

  function getRecommend(recommends) {
        return dispatch => {
            dispatch(request(recommends))
            recommendService.getRecommend(recommends)
            .then(
                recommends => {
                    dispatch(success(recommends))
                    console.log(recommends)
                    // history.push('/recommend')
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
        }

        function request() { return { type: recommendConstants.RECOMMEND_REQUEST, recommends } }
        function success(recommends) { return { type: recommendConstants.RECOMMEND_SUCCESS, recommends } }
        function failure(error) { return { type: recommendConstants.RECOMMEND_FAILURE, error } }
    }

    export default recommendReducer