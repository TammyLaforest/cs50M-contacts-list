// import { createStore } from 'redux'
const { createStore } = require('redux')

// Action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const DEFAULT_STATE = { user: {}, contacts: [] }
const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state, action) => {
    if (action.type === UPDATE_CONTACT) {
        return [...state, action.payload]
    }
    return state
}

const userReducer = (state, action) => {
    if (action.type === UPDATE_USER) return merge(state, action.payload)
    if (action.type === UPDATE_CONTACT) return merge(state, { prevContact: action.payload })

    return state
}


const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contacts: contactReducer(state.contacts, action)
})

// Action creators
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})
const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})
const store = createStore(reducer, DEFAULT_STATE)

store.dispatch(updateUser({ foo: 'foo' }))
store.dispatch(updateUser({ bar: 'bar' }))
store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: 'Tammy', number: '1231231234' }))
store.dispatch(addContact({ name: 'Jenny', number: '5435435432' }))

console.log(store.getState())
