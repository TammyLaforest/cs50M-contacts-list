import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { addContact } from './actions'
import reducer from './reducer'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)


// store.dispatch(addContact({ name: 'Tammy', phone: '1231231234' }))
// store.dispatch(addContact({ name: 'Jenny', phone: '2344566789' }))

export { store, persistor }