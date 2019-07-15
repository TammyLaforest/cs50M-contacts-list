import { createStore } from 'redux'
import reducer from './reducer'
import { addContact } from './actions'
const store = createStore(reducer)
export default store

// store.dispatch(updateUser({ foo: 'foo' }))
// store.dispatch(updateUser({ bar: 'bar' }))
// store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: 'Tammy', phone: '1231231234' }))
store.dispatch(addContact({ name: 'Jenny', phone: '5435435432' }))
