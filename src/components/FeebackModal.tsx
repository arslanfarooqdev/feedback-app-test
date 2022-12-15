import { Modal, Grid } from '@mui/material';
import React, {ReactElement} from 'react';
import { useCallback, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children?: ReactElement,
    open: boolean,
    onClose(): void,
}

const FeedbackModal:React.FC<Props> = (props) => {
    return (
        <>
        {/* @ts-ignore */}
            <Modal
             open={props.open}
             onClose={props.onClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
            >
            <div style={{
                height: '100vh',
                width: '100vw',
                display: 'grid',
                placeContent: 'center'
            }}>
                <div style={{
                    width:'300px',
                    maxWidth: '85vw',
                    minHeight: '10vh',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    borderRadius: '10px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                    onClick={props.onClose}
                    >
                        <CloseIcon 
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
            </Modal>
        </>
    )
}

export default FeedbackModal;