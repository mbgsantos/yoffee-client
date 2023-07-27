import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getService, updateService } from "../api/services.api";

const EditService = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [serviceStreet, setServiceStreet] = useState('');
    const [serviceCity, setServiceCity] = useState('');
    const [serviceCountry, setServiceCountry] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await getService(id);
                setName(response.data.name);
                setDescription(response.data.description);
                setServiceStreet(response.data.serviceStreet);
                setServiceCity(response.data.serviceCity);
                setServiceCountry(response.data.serviceCountry);
            } catch (error) {
                console.log('Error fetching service', error);
            }
        };

        fetchService();
    }, [id]);

    const handleName = e => {
        setName(e.target.value);
    };

    const handleDescription = e => {
        setDescription(e.target.value);
    };

    const handleServiceStreet = e => {
        setServiceStreet(e.target.value);
    };

    const handleServiceCity = e => {
        setServiceCity(e.target.value);
    };

    const handleServiceCountry = e => {
        setServiceCountry(e.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const updatedService = {_id: id,name, description, address: {
                street: serviceStreet,
                city: serviceCity,
                country: serviceCountry,
            }};
            await updateService(updatedService);
            navigate('/services');
        } catch (error) {
            console.log('Error updating service', error);
        }

        setName('');
        setDescription('');
        setServiceStreet('');
        setServiceCity('');
        setServiceCountry('');
    };

    return (
        <div>
            <h2>Edit Service</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />

                <label>Street Address:</label>
                <input type="text" name="street" value={serviceStreet} onChange={handleServiceStreet} />

                <label>City:</label>
                <input type="text" name="city" value={serviceCity} onChange={handleServiceCity} />

                <label>Country</label>
                <input type="text" name="country" value={serviceCountry} onChange={handleServiceCountry} />

                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default EditService;