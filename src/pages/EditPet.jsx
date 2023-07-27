import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPet, updatePet } from "../api/pets.api";

const EditPet = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState(0);
    const [microchip, setMicrochip] = useState('');
    const [insurance_name, setInsuranceName] = useState('');
    const [diet, setDiet] = useState('');
    const [veterinary_name, setVeterinaryName] = useState('');
    const [veterinary_street, setVeterinaryStreet] = useState('');
    const [veterinary_city, setVeterinaryCity] = useState('');
    const [veterinary_country, setVeterinaryCountry] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const response = await getPet(id);
                setName(response.data.name);
                setBreed(response.data.breed);
                setAge(response.data.age);
                setMicrochip(response.data.microchip);
                setInsuranceName(response.data.insurance_name);
                setDiet(response.data.diet);
                setVeterinaryName(response.data.veterinary_name);
                setVeterinaryStreet(response.data.veterinary_street);
                setVeterinaryCity(response.data.veterinary_city);
                setVeterinaryCountry(response.data.veterinary_country);
            } catch (error) {
                console.log('Error fetching pet', error);
            }
        };

        fetchPet();
    }, [id]);

    const handleName = e => {
        setName(e.target.value);
    };

    const handleBreed = e => {
        setBreed(e.target.value);
    };

    const handleAge = e => {
        setAge(e.target.value);
    };

    const handleMicrochip = e => {
        setMicrochip(e.target.value);
    };

    const handleInsuranceName = e => {
        setInsuranceName(e.target.value);
    };

    const handleDiet = e => {
        setDiet(e.target.value);
    };

    const handleVeterinaryName = e => {
        setVeterinaryName(e.target.value);
    };

    const handleVeterinaryStreet = e => {
        setVeterinaryStreet(e.target.value);
    };

    const handleVeterinaryCity = e => {
        setVeterinaryCity(e.target.value);
    };

    const handleVeterinaryCountry = e => {
        setVeterinaryCountry(e.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const updatedPet = {name, breed, age, microchip, insurance_name, diet, _id: id, veterinary: {
                name: veterinary_name,
                address: {
                    street: veterinary_street,
                    city: veterinary_city,
                    country: veterinary_country,
                },
            }};
            await updatePet(updatedPet);
            navigate('/pets');
        } catch (error) {
            console.log('Error updating pet', error);
        }

        setName('');
        setBreed('');
        setAge(0);
        setMicrochip('');
        setInsuranceName('');
        setVeterinaryName('');
        setVeterinaryStreet('');
        setVeterinaryCity('');
        setVeterinaryCountry('');
        setInsuranceName('');
        setDiet('');
    };

    return (
        <div>
            <h2>Edit Pet</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Breed:</label>
                <input type="text" name="breed" value={breed} onChange={handleBreed} />

                <label>Age:</label>
                <input type="number" name="age" value={age} onChange={handleAge} />

                <label>Microchip:</label>
                <input type="text" name="microchip" value={microchip} onChange={handleMicrochip} />

                <label>Veterinary Name:</label>
                <input type="text" name="vetName" value={veterinary_name} onChange={handleVeterinaryName} />

                <label>Veterinary Street:</label>
                <input type="text" name="vetStreet" value={veterinary_street} onChange={handleVeterinaryStreet} />

                <label>Veterinary City:</label>
                <input type="text" name="vetCity" value={veterinary_city} onChange={handleVeterinaryCity} />

                <label>Veterinary Country:</label>
                <input type="text" name="vetCountry" value={veterinary_country} onChange={handleVeterinaryCountry} />

                <label>Insurance Name:</label>
                <input type="text" name="insuranceName" value={insurance_name} onChange={handleInsuranceName} />

                <label>Diet:</label>
                <input type="text" name="diet" value={diet} onChange={handleDiet} />

                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default EditPet;