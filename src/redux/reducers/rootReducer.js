import {combineReducers} from 'redux';
import categories from './categoriesReducer'
import trending from './trendingReducer'

export default combineReducers({
    categories,
    trending
  })