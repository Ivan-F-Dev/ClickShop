import React, {useState} from "react";
import s from "./Header.module.scss"
import HeaderLinks from "./HeaderLinks/HeaderLinks";

const Header = () => {
    const [Links, setLinks] = useState(['Link','Link','Link','Link','Link','Link'])

    const onClick = () => {
        setLinks(Links.pop())
    }

    return (
        <div className={s.Header}>
            <div className={s.mainContainer}>
                <div className={s.topContainer}>
                    <div className={s.title_menuContainer}>
                        <div className={s.title}>title</div>
                        <div className={s.menu}>menu</div>
                    </div>
                    <div className={s.search}>search</div>
                    <div className={s.buttonsContainer}>
                        <div className={s.button}>button1</div>
                        <div className={s.button}>button2</div>
                        <div className={s.button}>button3</div>
                        <div className={s.button}>button4</div>
                    </div>
                </div>
                <button onClick={onClick}>Decrease links</button>

                {linkList.length > 0
                    ? (<div className={s.bottomContainer}>
                        <HeaderLinks linkList={Links}/>
                    </div>)
                    : null
                }

            </div>
        </div>
    );
}

export default Header;