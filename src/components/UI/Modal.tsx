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
                            <div className='modal__head'>
                                {props?.title}

                                <div onClick={props.onClose}>

                                </div>
                            </div>
                            {props.children}
                        </div>
                    </div>
                    : ''
            }

        </>
    )
}
