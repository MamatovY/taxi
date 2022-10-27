import './Header.css'
import TopHeader from './top-header/TopHeader'

const Header = () => {
    return (
        <>
            <TopHeader />
            <div className="header">
                <div className="container">
                    <div className="headerMain">

                        <h1>
                            Такси До Границы
                            Казахстана
                        </h1>
                        <div className="headerText">
                            Осуществляем комфортные и безопасные  поездки на границу Казахстана за обновлением миграционной карты!
                            Для Граждан России, Азербайджана, Таджикистана, Кыргызстана, Узбекистана, Украины,
                            Молдовы, ДНР, ЛНР. и т.д.
                        </div>
                        <a href='tel:+79266731110' className="headerBtn">Позвонить</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header