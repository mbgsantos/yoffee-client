import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActivity, updateActivity } from "../api/activities.api";

const EditActivity = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activityStreet, setActivityStreet] = useState('');
    const [activityCity, setActivityCity] = useState('');
    const [activityCountry, setActivityCountry] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await getActivity(id);
                setName(response.data.name);
                setDescription(response.data.description);
                setActivityStreet(response.data.activityStreet);
                setActivityCity(response.data.activityCity);
                setActivityCountry(response.data.activityCountry);
            } catch (error) {
                console.log('Error fetching activity', error);
            }
        };

        fetchActivity();
    }, [id]);

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

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const updatedActivity = {_id: id, name, description, address: {
                street: activityStreet,
                city: activityCity,
                country: activityCountry,
            }};
            await updateActivity(updatedActivity);
            navigate('/activities');
        } catch (error) {
            console.log('Error updating activity', error);
        }

        setName('');
        setDescription('');
        setActivityStreet('');
        setActivityCity('');
        setActivityCountry('');
    };

    return (
        <div>
            <h2>Edit Activity</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />

                <label>Street Address:</label>
                <input type="text" name="street" value={activityStreet} onChange={handleActivityStreet} />

                <label>City:</label>
                <input type="text" name="city" value={activityCity} onChange={handleActivityCity} />

                <label>Country</label>
                <input type="text" name="country" value={activityCountry} onChange={handleActivityCountry} />

                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default EditActivity;