import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

export default function About(){

    useEffect(() => {
        document.title = 'Rólunk - Fitness Hub'
    }, [])

    return (
        <section className="about">
            <div className="container">
                <div className="about-main">
                    <div className="about-text">
                        <h1 className="about-title">Rólunk</h1>
                        <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a possimus officiis accusantium consequatur cum quia fugiat necessitatibus amet, nesciunt vero non minima. Neque, minima impedit. Distinctio ipsam animi recusandae ipsum, tenetur hic, excepturi nemo magni quae doloremque nihil quo quibusdam incidunt similique, asperiores cumque placeat. Similique harum, minima perspiciatis quos itaque delectus? Voluptas, fuga deserunt? Veniam reprehenderit totam sint inventore ea aliquam quas nemo et. Quidem optio dolorum dignissimos, aspernatur officia dolore laborum. In nihil consequuntur quod ratione assumenda laudantium maiores, nobis voluptatibus expedita vero voluptatem eius dignissimos quaerat nam corrupti sapiente quos optio repudiandae commodi esse, beatae sint.</p>
                    </div>
                    <img src="https://www.myhighplains.com/wp-content/uploads/sites/87/2023/01/GettyImages-1322158059.jpg?strip=1" alt="" className="about-img" />
                </div>
                <h1 className="about-title">Személyzetünk</h1>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    grabCursor={true}
                    autoplay={true}
                    modules={[Autoplay]}
                    breakpoints={
                        {
                            300: {
                                slidesPerView: 2
                            },
                            500: {
                                slidesPerView: 3
                            },
                            800: {
                                slidesPerView: 4
                            }
                        }
                    }
                    >
                    <SwiperSlide className="slider">
                        <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="slides-img" />
                        <h3 className="slides-name">Luanne Ruthie</h3>
                        <h4 className="slides-title">Személyi edző</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slider">
                        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" className="slides-img" />
                        <h3 className="slides-name">Osbert Ron</h3>
                        <h4 className="slides-title">Kosárlabda edző</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slider">
                        <img src="https://us.123rf.com/450wm/mklrnt/mklrnt1911/mklrnt191104169/mklrnt191104169-face-of-handsome-hispanic-man-looking-at-camera.jpg?ver=6" alt="" className="slides-img" />
                        <h3 className="slides-name">Jep Blaine</h3>
                        <h4 className="slides-title">Fallabda edző</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slider">
                        <img src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg" alt="" className="slides-img" />
                        <h3 className="slides-name">Eartha Sharise</h3>
                        <h4 className="slides-title">Karate edző</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slider">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className="slides-img" />
                        <h3 className="slides-name">Kennedy Wesley</h3>
                        <h4 className="slides-title">Futás edző</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slider">
                        <img src="https://img.freepik.com/free-photo/headshot-serious-curly-haired-teenager-girl-looks-satisfied-dressed-casual-orange-jumper_273609-46636.jpg?w=360" alt="" className="slides-img" />
                        <h3 className="slides-name">Chrissy Justina</h3>
                        <h4 className="slides-title">Falmászás edző</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slider">
                        <img src="https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg" alt="" className="slides-img" />
                        <h3 className="slides-name">Mary Jo Bryn</h3>
                        <h4 className="slides-title">Jóga oktató</h4>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}