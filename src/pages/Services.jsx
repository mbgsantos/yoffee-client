import { useState, useEffect } from "react";
import { getAllServices } from "../api/services.api";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            const response = await getAllServices()
            setServices(response.data)
        } catch (error) {
            console.log('Error fetching the services', error);
        }
    };

    useEffect(() => {
        fetchServices()
    }, []);

    return (
        <div>
            <h1>Services</h1>

            {services && services.map(service => {
                return (
                    <div key={service._id}>
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                        <Link to={`/services/${service._id}`} >See More</Link>
                    </div>
                );
            })}

            <Link to={`/services/create`}>New Service</Link>
        </div>
    );
};

export default Services;