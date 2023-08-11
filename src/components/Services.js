import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

export default function Services(){
    
    useEffect(() => {
        document.title = 'Szolgáltatások - Fitness Hub'
    }, [])

    const services = data.map((service) => {
        return (
            <Link to={`${service.id}`} key={service.id} className="card">
                <h1 className="card-title">{service.title}</h1>
                <img src={service.img} className="card-img" />
            </Link>
        )
    })

    return (
        <section className="services">
            <h1 className="services-title">Szolgáltatásaink</h1>
            <div className="cards">
                <div className="container">
                    {services}
                </div>
            </div>
        </section>
    )
}