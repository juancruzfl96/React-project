import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import './index.css'
const ModalCards = ({open, onClose, character}) => {

console.log(character)
    return(
      <Modal isOpen={open} toggle={onClose} className='bodyModal'>
        <ModalHeader toggle={onClose}>{character.name}</ModalHeader>
        <ModalBody>
          <b>Description:</b><p>{character.description}</p>
          {character.comics.items.map((comic, index)=>(
            <p key={`comics-${index}`}><b>Comics: </b>{comic.name}</p>
          ))}
        </ModalBody>
      </Modal>

    )
}

export default ModalCards;