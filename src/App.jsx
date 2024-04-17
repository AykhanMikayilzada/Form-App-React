// App.jsx
import React, { useState } from 'react';
import Header from "../src/components/Header";
import Main from './components/Main';

function App() {
  const [cards, setCards] = useState([]);

  const handleAddCard = (content, imageUrl) => {
    const newCard = {
      id: Math.random(),
      content,
      imageUrl,
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <>
      <Header onAddCard={handleAddCard} />
      <Main cards={cards} />
    </>
  );
}

export default App;
