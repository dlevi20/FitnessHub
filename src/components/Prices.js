import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import services from '../data'

export default function Prices(){

    const [customBundle, setCustomBundle] = useState([])

    function bundleFunction(service){

        const checkDuplicate = customBundle.find((element) => element.id === service.id)
        if(!checkDuplicate){
            setCustomBundle(prevState => [...prevState, service])
        } else {
            setCustomBundle(customBundle.filter((element) => element.id !== service.id))
        }

    }

    const servicesCard = services.map(function(service){
        return <div key={service.id} className="service-titles">
            <h1 onClick={() => bundleFunction(service)} className="card-title">{service.title}</h1>
            <h1 className="card-title">{service.price}</h1>
        </div> 
    })

    const customBundleServices = customBundle.map(function(service){
        return <h4 key={service.id} className="selected-services-title">{service.title},</h4>
    })

    let total = customBundle.reduce(function(prev, current){
        return prev + current.price
    }, 0)

    return (
        <section className="prices-section">
            <div className="prices">
                <div className="cards">
                    <h1 className="cards-title">Legnépszerűbb csomagok</h1>
                    <div className="container">
                        <div className="card">
                            <div className="card-top">
                                <img src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K" alt="" className="card-img"/>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">Alapszintű hozzáférés</h1>
                                <h1 className="card-price">3.000 Ft</h1>
                                <p className="card-text">Hozzáférést nyújt az alábbi termekhez</p>
                                <ul className="card-list">
                                    <li className="card-list-item">Edzőterem</li>
                                    <li className="card-list-item">Személyi edzés</li>
                                    <li className="card-list-item">Falmászás</li>
                                    <li className="card-list-item">*</li>
                                </ul>
                                <Link to="contact" className="card-btn">Vásárlás</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-top">
                                <img src="https://thebasketballsocialhouse.com/wp-content/uploads/2023/02/Basketball-social-house-court-rental-centennial-CO.jpg" alt="" className="card-img"/>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">Középszintű hozzáférés</h1>
                                <h1 className="card-price">8.000 Ft</h1>
                                <p className="card-text">Hozzáférést nyújt az alábbi termekhez</p>
                                <ul className="card-list">
                                    <li className="card-list-item">Alapszintű hozzáférés</li>
                                    <li className="card-list-item">Kosárlabda</li>
                                    <li className="card-list-item">Fallabda</li>
                                    <li className="card-list-item">Futás</li>
                                </ul>
                                <Link to="contact" className="card-btn">Vásárlás</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-top">
                                <img src="https://hotelhelikon.hu/application/files/8816/6556/6279/hotel-helikon-keszthely-wellness-listakep.webp" alt="" className="card-img"/>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">Magas szintű hozzáférés</h1>
                                <h1 className="card-price">15.000 Ft</h1>
                                <p className="card-text">Hozzáférést nyújt az alábbi termekhez</p>
                                <ul className="card-list">
                                    <li className="card-list-item">Középszintű hozzáférés</li>
                                    <li className="card-list-item">Karate</li>
                                    <li className="card-list-item">Yoga</li>
                                    <li className="card-list-item">Wellness</li>
                                </ul>
                                <Link to="contact" className="card-btn">Vásárlás</Link>
                            </div>
                        </div>
                    </div>
                    <div className="custom-section">
                        <div className="container">
                        <div className="custom-left">
                            <img src="https://static01.nyt.com/images/2020/01/06/well/04run-gym/04run-gym-superJumbo.jpg" alt="" className="custom-img" />
                            <h1 className="custom-title">Válassza csomagaink egyikét vagy készítse el saját programtervét!</h1>
                        </div>
                        <div className="custom-right">
                            <div className="card">
                                {servicesCard}
                                <div className="selected-services">
                                    <h4>Szolgáltatások:</h4>
                                    {customBundleServices}
                                </div>
                                <div className="total">
                                    <h4>Összeg: {total}</h4>
                                </div>
                            </div>
                        </div>                                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}