import './Feedback.css'

const Feedback = () => {

    return (
        <div className="feedback">
            <div className="container">
                <div className="opacity"></div>
                <div className="opacityContent">
                    <h1>Отправьте нам заявку прямо сейчас и узнайте стоимость поездки!</h1>
                    <div>Оставьте контакты и мы вам перезвоним</div>
                    <div className="feedbackMain">
                        <form >
                            <input type="text" placeholder='Имя' />
                            <input type="number" placeholder='Телефон' />
                            <input type="text" placeholder='Гражданство' />
                            <input type="button" className='headerBtn' value="Отправить" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Feedback