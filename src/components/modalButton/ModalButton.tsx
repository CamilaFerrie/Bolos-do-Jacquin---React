import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import './ModalButton.css';

type ModalButtonProps = {
    title?: string;
    mostrar: boolean;
    mensagem?: String;
    textoConfirmar: string;
    textoCancelar: string;
    aoFechar: () => void;
    aoConfirmar: () => void;
    
}

function ModalButton({
    title,
    mostrar,
    mensagem = "Está é uma mensagem padrão",
    textoConfirmar = "Confirmar",
    textoCancelar = "Cancelar",
    aoFechar,
    aoConfirmar} : ModalButtonProps){

    return(
        <>
        <Modal show={mostrar} onHide={aoFechar} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title ? title : "Texto padrão"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {mensagem}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={aoFechar}>
                    {textoCancelar}
                </Button>
                <Button variant='primary' onClick={aoConfirmar}>
                    {textoConfirmar}
                </Button>

            </Modal.Footer>
        </Modal>
        </>

    
    )
}

export default ModalButton;