import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { ThemeReducer } from './ThemeReducer'
import { localeReducer } from './localeReducer'
import { authReducer } from './authReducer'
import { appReducer } from './appReducer'


const reducers = combineReducers({
    form: formReducer,
    theme: ThemeReducer,
    locale: localeReducer,
    auth: authReducer,
    app: appReducer,
    
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store