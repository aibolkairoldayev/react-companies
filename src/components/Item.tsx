import React from 'react';
import s from './Item.module.scss';
import { AppContext } from "../App";


function Item(props: { logo: string; name: string; bin: number; id: number; items: {}; setItems: any[] }) {
    const list = React.useContext(AppContext);
    console.log(items)
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
                <button className={s.edit}
                    onClick={() => {

                        // list.setItems(list.items.filter(obj => obj.company_id != props.id))
                    }}
                >
                    <img src="edit.svg" alt="icon" />
                </button>
                <button className={s.drop}>
                    <img src="drop.svg" alt="icon" />
                </button>
            </div>
        </div>
    )
}

export default Item;