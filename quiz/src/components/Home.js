import React from 'react';

export default function Home({ startQuiz }) {
  const handleButtonClick = () => {
    startQuiz('HTML'); // or any topic you want to start with
  };

  const backgroundStyle = {
    backgroundImage: 'url(./assets/quize.avif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <h1 className="text-primary">Let's Quiz</h1>
        <h2>Test your skills and become a master.</h2>
        <p>We organize quizzes on various topics.</p>
        <p>Sign up if you haven't already and get access to millions of quizzes on the topic of your interest.</p>
        <p><b>Start Your Journey Here:</b></p>
        <div>
          <button className="btn btn-warning" type="button" onClick={handleButtonClick}>
            Start 
          </button>
        </div>
      </div>
    </div>
  );
}
