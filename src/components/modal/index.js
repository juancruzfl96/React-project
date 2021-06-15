import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';


//import Home from '../../views/home'

const ModalCards = ({open, onClose, character}) => {

console.log(character)
    return(
      <Modal isOpen={open} toggle={onClose}>
        <ModalHeader toggle={onClose}>{character.name}</ModalHeader>
        <ModalBody>
          <b>Description:</b><p>{character.description}</p>
          {character.comics.items.map((comic, index)=>(
            <p key={`comics-${index}`}>{comic.name}</p>
          ))}
        </ModalBody>
      </Modal>
    )
}

export default ModalCards;