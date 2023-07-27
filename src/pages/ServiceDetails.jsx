import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteService, getService } from "../api/services.api";

const ServiceDetails = () => {
    const [service, setService] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    const fetchService = async (id) => {
        try {
            const response = await getService(id);
            setService(response.data);
        } catch (error) {
            console.log('Error fetching service', error);
        }
    };

    useEffect(() => {
        fetchService(id);
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteService(id);
            navigate('/services');
        } catch (error) {
            console.log('Error deleting service', error);
        }
    };

    return (
        <div>
            {service && (
                <div>
                    <h1>{service.name}</h1>
                    <h5>{service.description}</h5>
                    <p>{service.address.street}, {service.address.city}, {service.address.country}</p>

                    <Link to={`/services/edit/${id}`}>
                        <button>Edit</button>
                    </Link>

                    <button onClick={handleDelete}>Delete Service</button>
                </div>
            )}

            <Link to={'/services'}>Back to Services</Link>
        </div>
    )
};

export default ServiceDetails;