import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteActivity, getActivity } from "../api/activities.api";

const ActivityDetails = () => {
    const [activity, setActivity] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    const fetchActivity = async (id) => {
        try {
            const response = await getActivity(id);
            setActivity(response.data);
        } catch (error) {
            console.log('Error fetching activity', error);
        }
    };

    useEffect(() => {
        fetchActivity(id);
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteActivity(id);
            navigate('/activities');
        } catch (error) {
            console.log('Error deleting activity', error);
        }
    };

    return (
        <div>
            {activity && (
                <div>
                    <h1>{activity.name}</h1>
                    <h5>{activity.description}</h5>
                    <p>{activity.address.street}, {activity.address.city}, {activity.address.country}</p>

                    <Link to={`/activities/edit/${id}`}>
                        <button>Edit</button>
                    </Link>

                    <button onClick={handleDelete} >Delete Activity</button>
                </div>
            )}

            <Link to={`/activities`}>Back to Activities</Link>
        </div>
    )
};

export default ActivityDetails;