import { combineReducers } from 'redux'
import profile from './profile.reducer'
import repository from './repository.reducer'

export const Reducers = combineReducers({ profile, repository })