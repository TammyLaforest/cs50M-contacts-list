import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)
export default store

// store.dispatch(updateUser({ foo: 'foo' }))
// store.dispatch(updateUser({ bar: 'bar' }))
// store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: 'Tammy', number: '1231231234' }))
store.dispatch(addContact({ name: 'Jenny', number: '5435435432' }))
