import { useState } from 'react'

import './TopHeader.css'
import menuIcon from './../../../assets/images/menu.png'
import crossIcon from './../../../assets/images/cross.png'

const TopHeader = () => {
    const [navActive, setNavActive] = useState(false)

    const navName = navActive ? 'headerNav active' : 'headerNav'
    const menuCross = navActive ? crossIcon : menuIcon

    return (
        <div className="TopHeader">
            <div className="container">

                <div className="headerLogo">
                    <h3> До Граицы.РФ</h3>
                </div>
                <div className={navName}>
                    <div>
                        <a href="/">
                            О КОМПАНИИ
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            УСЛУГИ
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            КОНТАКТЫ
                        </a>
                    </div>
                    <div>
                        <a href="tel:+79266731110">
                            +7(926)-673-11-10
                        </a>
                    </div>
                </div>
                <div className="menu" onClick={() => setNavActive(prev => !prev)}>
                    <img src={menuCross} alt="" />
                </div>
            </div>

        </div>
    )
}

export default TopHeader