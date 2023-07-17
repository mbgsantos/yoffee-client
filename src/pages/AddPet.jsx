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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newPet = {name, breed, age, microchip, insurance_name, diet}
            await addPet(newPet);
            navigate('/pets');
        } catch (error) {
            console.log('Error adding pet', error)
        }

        setName('');
        setBreed('');
        setAge(0);
        setMicrochip('');
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