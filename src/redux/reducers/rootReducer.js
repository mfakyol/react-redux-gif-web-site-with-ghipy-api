import {combineReducers} from 'redux';
import categories from './categoriesReducer'
import trending from './trendingReducer'
import detail from './detailReducer'
import randomId from './randomIdReducer'
import gifsByCategory from './gifsByCategoryReducer'

export default combineReducers({
    categories,
    trending,
    detail,
    randomId,
    gifsByCategory
  })