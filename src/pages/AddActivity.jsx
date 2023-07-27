import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addActivity } from "../api/activities.api";

const AddActivity = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activityStreet, setActivityStreet] = useState('');
    const [activityCity, setActivityCity] = useState('');
    const [activityCountry, setActivityCountry] = useState('');
    const navigate = useNavigate();

    const handleName = e => {
        setName(e.target.value);
    };

    const handleDescription = e => {
        setDescription(e.target.value);
    };

    const handleActivityStreet = e => {
        setActivityStreet(e.target.value);
    };

    const handleActivityCity = e => {
        setActivityCity(e.target.value);
    };

    const handleActivityCountry = e => {
        setActivityCountry(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newActivity = {name, description, address: {
                street: activityStreet,
                city: activityCity,
                country: activityCountry,
            }}
            await addActivity(newActivity);
            navigate('/activities');
        } catch (error) {
            console.log('Error adding activity', error);
        }

        setName('');
        setDescription('');
        setActivityStreet('');
        setActivityCity('');
        setActivityCountry('');
    };

    return (
        <div>
            <h2>New Activity</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />

                <label>Address:</label>
                <input type="text" name="street" value={activityStreet} onChange={handleActivityStreet} />

                <label>City:</label>
                <input type="text" name="city" value={activityCity} onChange={handleActivityCity} />

                <label>Country:</label>
                <input type="text" name="country" value={activityCountry} onChange={handleActivityCountry} />

                <button type='submit' >Create Activity</button>
            </form>
        </div>
    );
};

export default AddActivity;