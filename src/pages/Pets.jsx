import { useState, useEffect } from "react";
import { getAllPets } from "../api/pets.api";
import { Link } from "react-router-dom";

const Pets = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        try {
            const response = await getAllPets()
            setPets(response.data)
        } catch (error) {
            console.log('Error fetching the pets', error);
        }
    };

    useEffect(() => {
        fetchPets()
    }, []);

    return (
        <div>
            <h1>My Pets</h1>

            {pets && pets.map(pet => {
                return (
                    <div key={pet._id}>
                        <h2>{pet.name}</h2>
                        <Link to={`/pets/${pet._id}`} >See Details</Link>
                    </div>
                );
            })}

            <Link to={`/pets/create`}>New Pet</Link>
        </div>
    );
};

export default Pets;