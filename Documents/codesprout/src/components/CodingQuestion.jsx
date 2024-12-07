import React, { useState, useEffect } from 'react';
import { generateProblem } from '../services/geminiService';
import '../styles/codingQuestion.scss';

function CodingQuestion({ onQuestionChange, language }) {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState(1);

  const loadNewQuestion = async () => {
    setLoading(true);
    try {
      const newQuestion = await generateProblem(difficulty, language);
      setQuestion(newQuestion);
      onQuestionChange(newQuestion);
    } catch (error) {
      console.error('Error loading question:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNewQuestion();
  }, [language, difficulty]);

  if (loading) {
    return <div className="question-loading">Loading question...</div>;
  }

  return (
    <div className="coding-question">
      <div className="question-header">
        <h2>{question.title}</h2>
        <div className="question-controls">
          <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(Number(e.target.value))}
            className="difficulty-selector"
          >
            <option value={1}>Beginner</option>
            <option value={2}>Easy</option>
            <option value={3}>Intermediate</option>
            <option value={4}>Advanced</option>
          </select>
          <button onClick={loadNewQuestion} className="new-question-btn">
            New Question
          </button>
        </div>
      </div>

      <div className="question-content">
        <div className="description">
          <h3>Problem Description</h3>
          <p>{question.description}</p>
        </div>

        {question.examples.length > 0 && (
          <div className="examples">
            <h3>Examples</h3>
            {question.examples.map((example, index) => (
              <div key={index} className="example">
                <div className="example-input">
                  <strong>Input:</strong> {example.input}
                </div>
                <div className="example-output">
                  <strong>Output:</strong> {example.output}
                </div>
                {example.explanation && (
                  <div className="example-explanation">
                    <strong>Explanation:</strong> {example.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="hints">
          <h3>Hints</h3>
          <button 
            onClick={() => setShowHints(!showHints)} 
            className="toggle-hints"
          >
            {showHints ? 'Hide Hints' : 'Show Hints'}
          </button>
          {showHints && (
            <ul>
              {question.hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodingQuestion; 