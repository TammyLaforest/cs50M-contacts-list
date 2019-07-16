import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { addContact } from './actions'
import reducer from './reducer'

// Way to wrap an expression to delay its evaluation
// const thunk = store = next => action => {
//     if (typeof action === 'function') {
//         action(store.dispatch)
//     } else {
//         next(action)
//     }
// }

const store = createStore(reducer, applyMiddleware(thunk))



// store.dispatch(updateUser({ foo: 'foo' }))
// store.dispatch(updateUser({ bar: 'bar' }))
// store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: 'Tammy', phone: '1231231234' }))


console.log(store.getState())
export default store