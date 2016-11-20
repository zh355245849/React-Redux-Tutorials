/**
 * Created by zh355245849 on 2016/11/19.
 */
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {todos: [], user: {}}) {
    return finalCreateStore(reducer, initialState)
}