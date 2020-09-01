import {combineReducers} from 'redux';
import categories from './categoriesReducer'
import trending from './trendingReducer'
import detail from './detailReducer'

export default combineReducers({
    categories,
    trending,
    detail
  })