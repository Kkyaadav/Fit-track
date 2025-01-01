import React, { useState } from 'react';
import { fetchData } from '../utils/fetchData';
import TutCard from '../components/TutCard';
import styled from 'styled-components';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'your-api-key',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

const Container = styled.div`
  width: 100%;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  text-align: center;

 

  p {
    font-size: 26px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  span {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;


  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }

  select {
    padding: 12px;
    width: 150px;
    border-radius: 5px;
    border:none;
    background: orangered;
    color: white;
    border: none;

    @media (max-width: 480px) {
      width: 80%;
      padding: 18px;
      font-size: 16px;
    }
  }

  button {
    padding: 12px;
    border-radius: 5px;
    background: green;
    color: white;
    cursor: pointer;
    border: none;


    @media (max-width: 480px) {
      width: 80%;
      padding: 18px;
      font-size: 16px;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

function Tutorials() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFetch = async () => {
    if (!selectedCategory) {
      alert('Please select a valid category first!');
      return;
    }

    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedCategory}`;
      const res = await fetchData(url, options);
      setData(res);
      setError(null);
      console.log(res); // Debugging purposes
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Header>
        <p>Exercise Tutorials</p>
        <span>Select Your Category</span>
      </Header>

      <Controls>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select</option>
          <option value="back">Back</option>
          <option value="chest">Chest</option>
          <option value="lower legs">Lower Legs</option>
          <option value="upper legs">Upper Legs</option>
          <option value="cardio">Cardio</option>
          <option value="neck">Neck</option>
          <option value="waist">Waist</option>
          <option value="lower arms">Lower Arms</option>
          <option value="upper arms">Upper Arms</option>
          <option value="shoulders">Shoulders</option>
          
        </select>
        <button onClick={handleFetch}>Fetch Exercises</button>
      </Controls>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>Error: {error}</p>}

      <CardsContainer>
        {data.map((item) => (
          <TutCard
            key={item.id}
            equipment={item.equipment}
            instructions={item.instructions}
            gif={item.gifUrl}
            name={item.name}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default Tutorials;
