import { MouseEventHandler, ReactNode, useState } from 'react'

export default function Modal(props: {
    children: ReactNode;
    onClose: MouseEventHandler<HTMLDivElement> | undefined;
    isShow: string,
    title: string,
}) {

    return (
        <>
            {
                props?.isShow
                    ? <div className='modal'>
                        <div className='modal__wrapper' onClick={props.onClose} />
                        <div className='modal__content'>
                            <div
                                className="closeBtn"
                                onClick={props.onClose}
                            >
                                <img src="icons/close.svg" alt="" />
                            </div>
                            <div className='modal__head'>
                                <div className="modal__coName">{props?.title}</div>

                            </div>
                            {props.children}
                        </div>
                    </div>
                    : ''
            }

        </>
    )
}
