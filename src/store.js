
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore()

export default Store
