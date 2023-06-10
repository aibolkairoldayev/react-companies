import { MouseEventHandler, ReactNode, useState } from 'react'

export default function Modal2(props: {
    children: ReactNode;
    onClose: MouseEventHandler<HTMLDivElement> | undefined;
    isShow: string | boolean,

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
                                <div className="delModTitle">Удаление организации</div>

                            </div>
                            <div className="modal__body">
                                <div className="del__text">
                                    Вы уверены, что хотите удалить организацию из списка?
                                </div>
                                <div className="del__buttons">
                                    <button className='cancel'>Отменить</button>
                                    <button className="deleteBtn">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''
            }

        </>
    )
}
