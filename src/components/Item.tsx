import { MouseEventHandler } from 'react';
import s from './Item.module.scss';


function Item(props: {
    logo: string;
    name: string;
    bin: number;
    id: number;
    onEdit?: MouseEventHandler<HTMLButtonElement> | undefined;
    onDrop?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {

    return (
        <div className={s.item}>
            <div className={s.img}>
                <img src={`${props.logo ? `${props.logo}` : "logoS.png"} `} alt="icon" />
            </div>
            <div className={s.info}>
                <div className={s.name}>{props.name}</div>
                <div className={s.bin}>{props.bin}</div>
            </div>
            <div className={s.buttons}>
                <button
                    className={s.edit}
                    onClick={props?.onEdit}
                >
                    <img src="edit.svg" alt="icon" />
                </button>
                <button className={s.drop}
                    onClick={props?.onDrop}
                >

                    <img src="drop.svg" alt="icon" />
                </button>
            </div>
        </div>
    )
}

export default Item;