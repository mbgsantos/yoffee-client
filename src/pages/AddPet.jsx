import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPet } from "../api/pets.api";

const AddPet = () => {
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
    const navigate = useNavigate();

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newPet = {name, breed, age, microchip, insurance_name, diet, veterinary: {
                name: veterinary_name,
                address: {
                    street: veterinary_street,
                    city: veterinary_city,
                    country: veterinary_country,
                },
            }}
            await addPet(newPet);
            navigate('/pets');
        } catch (error) {
            console.log('Error adding pet', error)
        }

        setName('');
        setBreed('');
        setAge(0);
        setMicrochip('');
        setVeterinaryName('');
        setVeterinaryStreet('');
        setVeterinaryCity('');
        setVeterinaryCountry('');
        setInsuranceName('');
        setDiet('');
    };

    return (
        <div>
            <h2>New Pet</h2>

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

                    <button type='submit'>Create Pet</button>
            </form>
        </div>
    );
};

export default AddPet;