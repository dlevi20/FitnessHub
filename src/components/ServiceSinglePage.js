import { useParams, Link } from 'react-router-dom'
import services from '../data'

export default function ServiceSinglePage(){

    const { serviceId } = useParams()
    const service = services.find((service) => service.id == serviceId)
    const { title, img, description } = service

    return (
        <div className="service container">
            <h5 className="services-link">
                <Link to="../..">Kezdőlap / </Link>
                <Link to="../services">Szolgáltatások / </Link>{title}
            </h5>
            <h1 className="service-title">{title}</h1>
            <img src={img} alt="" className="service-img" />
            <h2 className="service-description-title">Leírás</h2>
            <p className="service-description">
                {description}
            </p>
        </div>
    )
}