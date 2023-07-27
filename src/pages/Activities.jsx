import { useState, useEffect } from "react";
import { getAllActivities } from "../api/activities.api";
import { Link } from "react-router-dom";

const Activities = () => {
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        try {
            const response = await getAllActivities()
            setActivities(response.data)
        } catch (error) {
            console.log('Error fetching the activities', error);
        }
    };

    useEffect(() => {
        fetchActivities()
    }, []);

    return (
        <div>
            <h1>Activities</h1>

            {activities && activities.map(activity => {
                return (
                    <div key={activity._id}>
                        <h4>{activity.name}</h4>
                        <p>{activity.description}</p>
                        <Link to={`/activities/${activity._id}`} >See More</Link>
                    </div>
                );
            })}

            <Link to={`/activities/create`} >New Activity</Link>
        </div>
    );
};

export default Activities;