import React from 'react';
import Movie from './components/Movie';

function InnerComponent() {
  return <h3>내부 컴포넌트(InnerComponent) 생성</h3>;
}

function App() {
  return (
    <div>
      <h1>리액트 앱 테스트!!!!</h1>
      <Movie title="movie1" score="1"/>
      <Movie title="movie2" score="9"/>
      <InnerComponent />
    </div>);
}

export default App;
