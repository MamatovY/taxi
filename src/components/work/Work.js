import './Work.css'

const Work = () => {
    return (
        <div className="work">
            <div className="container">
                <h1>Как мы работаем</h1>
                <div className="workMain">

                    <div className="mainItems">
                        <h3>
                            <div>1</div>
                            Оставьте заявку</h3>
                        <div>Впишите всю нужную информацию о поездке</div>
                        <div className="headerBtn">Заполните форму</div>
                    </div>

                    <div className="nodes"></div>

                    <div className="mainItems">
                        <h3>
                            <div>2</div>
                            Мы позвоним
                        </h3>
                        <div>Наш менеджер свяжется
                            с вами и уточнит детали</div>
                    </div>

                    <div className="nodes"></div>

                    <div className="mainItems">
                        <h3>
                            <div>3</div>
                            Встреча
                        </h3>
                        <div>Встречаетесь с Водителем и располагаетесь в автомобиле</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work