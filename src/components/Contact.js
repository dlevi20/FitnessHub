import { useEffect } from "react"

export default function Contact(){

    useEffect(() => {
        document.title = 'Kapcsolat - Fitness Hub'
    }, [])

    return (
        <section className="contact container">
            <div className="contacts">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Rosemount%2C_MN_-_Anytime_Fitness_gym_exterior_%2843460728481%29.jpg" className="contact-img" />
                <small>Debrecen, Kossuth tér</small>
                <div className="contact-flex">
                    <div className="contact-icons">
                    <h3>Elérhetőségek</h3>
                        <h4><i className="fa-solid fa-phone"></i>06-70-123-4567</h4>
                        <h4><i className="fa-solid fa-envelope"></i>emailcim@gmail.com</h4>
                        <h4><i className="fa-solid fa-location-dot"></i>Debrecen, Kossuth tér</h4>
                    </div>
                    <div className="contact-open">
                        <h3>Nyitvatartás</h3>
                        <ul className="contact-list">
                            <li className="contact-list-item">Hétfő - Péntek</li>
                            <li className="contact-list-item">8:00 - 20:00</li>
                            <li className="contact-list-item">Szombat - Vasárnap</li>
                            <li className="contact-list-item">8:00 - 16:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h1>Kérdése van?</h1>
                <h5>Keressen fel minket elérhetőségeink egyikén, vagy írjon egy emailt!</h5>
                <form>
                    <input type="text" placeholder="Név" />
                    <input type="text" placeholder="Email cím" />
                    <textarea cols="30" rows="10" placeholder="Üzenet" />
                </form>
                <button type="submit" className="submit-btn">Küldés</button>
            </div>
        </section>
    )
}