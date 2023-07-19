import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deletePet, getPet } from "../api/pets.api";

const PetDetails = () => {
    const [pet, setPet] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    const fetchPet = async (id) => {
        try {
            const response = await getPet(id);
            setPet(response.data);
        } catch (error) {
            console.log('Error fetching pet', error);
        }
    };

    useEffect(() => {
        fetchPet(id);
    }, [id]);

    const handleDelete = async () => {
        try {
            await deletePet(id);
            navigate('/pets');
        } catch (error) {
            console.log('Error deleting the pet', error);
        }
    };

    return (
        <div>
            {pet && (
                <div>
                    <h1>{pet.name}</h1>
                    <h5>Breed: {pet.breed}</h5>
                    <h5>Age: {pet.age}</h5>
                    <h5>Microchip: {pet.microchip}</h5>
                    <h5>Veterinary: {pet.veterinary.name}</h5>
                    <h6>Street: {pet.veterinary.address.street}</h6>
                    <h6>City: {pet.veterinary.address.city}</h6>
                    <h6>Country: {pet.veterinary.address.country}</h6>
                    <h5>Insurance Name: {pet.insurance_name}</h5>
                    <h5>Diet: {pet.diet}</h5>

                    <Link to={`/pets/edit/${id}`}>
                        <button>Edit</button>
                    </Link>

                    <button onClick={handleDelete} >Delete Pet</button>
                </div>
            )}

            <Link to={`/pets`} >Back to Pets</Link>
        </div>
    )
};

export default PetDetails;