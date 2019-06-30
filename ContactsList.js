import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

const renderItem = obj => <Row {...obj.item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>


const ContactsList = props => {
    const ContactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {

        }
    })


    return (

        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={[{
                title: 'A',
                data: props.contacts
            }]}
        />
    )
}

ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array
}

export default ContactsList