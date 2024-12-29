import React, { useState } from "react";
import "./App.css";

function App() {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTopic = () => {
    if (topic && description) {
      const newTopic = { id: Date.now(), topic, description };
      setTopics((prevTopics) => [...prevTopics, newTopic]);
      setTopic("");
      setDescription("");
    }
  };

  const handleDeleteTopic = (id) => {
    setTopics((prevTopics) => prevTopics.filter((t) => t.id !== id));
  };

  const filteredTopics = topics.filter((t) =>
    t.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="center-section">
        <h1>Node text</h1>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p>Showing: {filteredTopics.length}</p>
        </div>
        <p>Total Topics: {topics.length}</p>
      </div>

      <div className="left-section">
        <div className="input-container">
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAddTopic}>Add to Book</button>
        </div>
        <div className="topic-list">
          {filteredTopics.map((t) => (
            <div key={t.id} className="topic-item">
              <h3>{t.topic}</h3>
              <p>{t.description}</p>
              <button onClick={() => handleDeleteTopic(t.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
