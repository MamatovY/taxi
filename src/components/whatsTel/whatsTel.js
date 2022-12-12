import './whatsTel.css'

const WhatsTel = () => {
    return (
        <div className="WhatsTel">
            <div className="container">
                <div className="opacity"></div>
                <div className="opacityContent">
                    <h1>
                        Свяжитесь с Нами !
                    </h1>

                    <div className="whatsBtns">
                        <a href='https://wa.me/+996501261728' className="headerBtn">Написать в WhatsApp</a>
                        <a href='https://t.me/mamatovy' className="headerBtn">Написать в Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsTel