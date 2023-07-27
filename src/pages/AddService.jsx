import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addService } from "../api/services.api";

const AddService = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [serviceStreet, setServiceStreet] = useState('');
    const [serviceCity, setServiceCity] = useState('');
    const [serviceCountry, setServiceCountry] = useState('');
    const navigate = useNavigate();

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newService = {name, description, address: {
                street: serviceStreet,
                city: serviceCity,
                country: serviceCountry,
            }}
            await addService(newService);
            navigate('/services');
        } catch (error) {
            console.log('Error adding service', error);
        }

        setName('');
        setDescription('');
        setServiceStreet('');
        setServiceCity('');
        setServiceCountry('');
    };

    return (
        <div>
            <h2>New Service</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />

                <label>Address:</label>
                <input type="text" name="street" value={serviceStreet} onChange={handleServiceStreet} />

                <label>City:</label>
                <input type="text" name="city" value={serviceCity} onChange={handleServiceCity} />

                <label>Country:</label>
                <input type="text" name="country" value={serviceCountry} onChange={handleServiceCountry} />

                <button type='submit' >Create Service</button>
            </form>
    </div>
    )
}

export default AddService;