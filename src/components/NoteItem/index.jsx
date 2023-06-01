import React from 'react'

import { FiPlus, FiX } from 'react-icons/fi';

import {
    Container,
} from './styles';

export const NoteItem = ({ title, isNew, value, onClick, ...rest}) => {
  return (
    <Container isNew={isNew}>
        {/* <label>{title}</label> */}
        <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        />
        <button
        type='button'
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
        >
        {isNew ? <FiPlus /> : <FiX />}
        </button>
    </Container>
  )
}
