import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { ThemeReducer } from './ThemeReducer'
import { localeReducer } from './localeReducer'
import { authReducer } from './authReducer'
import { adminReducer } from './adminReducer'
import { appReducer } from './appReducer'


const reducers = combineReducers({
    form: formReducer,
    theme: ThemeReducer,
    locale: localeReducer,
    admin: adminReducer,
    auth: authReducer,
    app: appReducer,
    
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store