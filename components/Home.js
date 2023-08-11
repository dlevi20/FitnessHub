import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){

    useEffect(() => {
        document.title = 'Fitness Hub'
    }, [])

    const [reviews, setReviews] = useState([
        {
            id: 1,
            image: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
            name: 'Mario Heath',
            review: 'Ex maiores quia At dolorem neque est quasi autem quo deleniti quia et quas eligendi aut minima aperiam.'
        },
        {
            id: 2,
            image: 'https://st4.depositphotos.com/4509995/21763/i/600/depositphotos_217634160-stock-photo-portrait-of-white-young-woman.jpg',
            name: 'Jorge Doyle',
            review: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 3,
            image: 'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
            name: 'Clyde Jacobs',
            review: 'Qui laborum fugiat eum nostrum illo qui perferendis quidem quo illum quibusdam et nulla inventore hic tempora asperiores'
        },
        {
            id: 4,
            image: 'https://img.freepik.com/free-photo/people-lifestyle-concept-attractive-young-caucasian-male-good-mood-blue-long-sleeved-shirt-smiling-cheerfully-showing-perfect-white-teeth-happy-with-positive-news-keeping-arms-folded_176420-13280.jpg',
            name: 'Greg Peters',
            review: 'Eum eaque molestiae aut internos temporibus ex nostrum quis non enim repellendus qui sint dolorem eos molestiae nisi et odit corporis.'
        },
        {
            id: 5,
            image: 'https://us.123rf.com/450wm/nenetus/nenetus2205/nenetus220500238/187479489-shot-of-confident-woman-having-video-call-with-laptop-sitting-in-living-room-at-home.jpg?ver=6',
            name: 'Kimberly Mann',
            review: 'Ut doloribus dignissimos eum quidem eaque est veniam aliquam cum dolores galisum qui nesciunt earum.'
        },
        {
            id: 6,
            image: 'https://st4.depositphotos.com/5989284/20550/i/600/depositphotos_205506006-stock-photo-portrait-smiling-handsome-male-worker.jpg',
            name: 'Eugene Blake',
            review: 'In accusantium suscipit ut voluptas enim sed voluptatibus magnam.'
        }
    ])
    const [currentReview, setCurrentReview] = useState(reviews[0])
    const [currentReviewBg, setCurrentReviewBg] = useState(1)
    const active = {
        backgroundColor : '#fe5a1d',
        color: '#f8f8ff'
    }
    const inactive = {}

    const [selectedAccordion, setSelectedAccordion] = useState(null)

    function toggleAccordion(accordion){
        if (selectedAccordion == accordion){
            return setSelectedAccordion(null)
        }

        setSelectedAccordion(accordion)
    }

    const displayReviews = reviews.map((review) => {
        return <div key={review.id} className="review-slot" style={currentReviewBg == review.id ? active : inactive} onClick={() => {
            setCurrentReview(review)
            setCurrentReviewBg(review.id)
        }}>
            <img src={review.image} className="review-slot-img" />
            <h3 className="review-slot-title">{review.name}</h3>
            <p className="review-slot-review">{review.review}</p>
        </div>
    })

    return (
        <section className="home">

            <div className="home-page-hero">
                <img src="https://d.newsweek.com/en/full/2144437/group-people-running.jpg?w=1600&h=900&q=88&f=a9d3d80d6d1a546e9ba6d20a820c0b1c" alt="" className="home-page-img" />
                <div className="container">
                    <h1 className="home-page-title">Fitness <span>Hub</span></h1>
                    <h3 className="home-page-text">Csatlakozz edzőtermünkhöz, és hozd ki a legtöbbet magadból!</h3>
                        <Link to="contact" className="home-page-btn">Csatlakozás</Link>

                </div>
            </div>

            <div className="cards">
            <h1 className="cards-title">A sportolás előnyei</h1>
                <div className="container">          
                    <div className="card">
                        <i className="fa-solid fa-heart-pulse"></i>
                        <h1 className="card-title">Egészség</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure minus libero repellat rem corporis.</p>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-dumbbell"></i>
                        <h1 className="card-title">Erős fizikum</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure minus libero repellat rem corporis.</p>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-users-line"></i>
                        <h1 className="card-title">Összetartó közösség</h1>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure minus libero repellat rem corporis.</p>
                    </div>
                </div>
            </div>

            <div className="recommendation">
                <div className="container">
                    <img src="https://www.orangetheory.com/content/dam/otf/en_ca/2021-photos/111920_OTF_Aguiar_C09_0643_1920x1080.jpg" alt="" className="recommendation-img" />
                    <div className="recommendation-text">
                        <h1 className="recommendation-title">Miért minket válasszon?</h1>
                        <ul className="recommendation-list">
                            <li className="recommendation-list-item">Széles körű választék</li>
                            <li className="recommendation-list-item">Modern eszközök</li>
                            <li className="recommendation-list-item">Összetartó közösség</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="reviews">
                <div className="cards">
                    <div className="container">
                        <div className="card">
                            <img src={currentReview.image} className="card-img" />
                            <h1 className="card-title">{currentReview.name}</h1>
                            <p className="card-text">{currentReview.review}</p>
                        </div>
                        <div className="card">
                            <h1 className="cards-title">Vélemények</h1>
                            {displayReviews}
                        </div>
                    </div>
                </div>
            </div>

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
                </div>
            </div>

            <div className="faq">
                <div className="container">
                    <h1 className="faq-title">Gyakori kérdések</h1>
                    <div className="faq-cards">
                        <div className={selectedAccordion === 1 ? "faq-card-active" : "faq-card"}>
                            <div className="faq-card-title" onClick={() => toggleAccordion(1)}>
                                <h1>Bármikor lemondható a szolgáltatás?</h1>
                                <i className="fa-solid fa-chevron-up"></i>
                            </div>
                            <p className="faq-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam repellat nulla architecto error molestiae vitae, beatae explicabo repellendus fuga temporibus quos. Repellendus odio qui veritatis voluptatem inventore, ipsum animi magni nulla illum minima molestiae voluptatibus beatae quam, consequatur mollitia.</p>
                        </div>
                        <div className={selectedAccordion === 2 ? "faq-card-active" : "faq-card"}>
                            <div className="faq-card-title" onClick={() => toggleAccordion(2)}>
                                <h1>Kezdőknek is megfelelő az edzőterem?</h1>
                                <i className="fa-solid fa-chevron-up"></i>
                            </div>
                            <p className="faq-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam repellat nulla architecto error molestiae vitae, beatae explicabo repellendus fuga temporibus quos. Repellendus odio qui veritatis voluptatem inventore, ipsum animi magni nulla illum minima molestiae voluptatibus beatae quam, consequatur mollitia.</p>
                        </div>
                        <div className={selectedAccordion === 3 ? "faq-card-active" : "faq-card"}>
                            <div className="faq-card-title" onClick={() => toggleAccordion(3)}>
                                <h1>Milyen további termékek vannak?</h1>
                                <i className="fa-solid fa-chevron-up"></i>
                            </div>
                            <p className="faq-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam repellat nulla architecto error molestiae vitae, beatae explicabo repellendus fuga temporibus quos. Repellendus odio qui veritatis voluptatem inventore, ipsum animi magni nulla illum minima molestiae voluptatibus beatae quam, consequatur mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}