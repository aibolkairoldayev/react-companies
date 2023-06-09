import React from 'react';
import s from './Item.module.scss';
import { AppContext } from "../App";


function Item( props: {logo: string; name:string; bin: number;}) {
    const  items  = React.useContext(AppContext);
    const  setItems  = React.useContext(AppContext);
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
                    onClick={()=> {
                        
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