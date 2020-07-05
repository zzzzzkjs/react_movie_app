import React from 'react';
import Test from './components/Test';

function InnerComponent() {
  return <h3>내부 컴포넌트(InnerComponent) 생성</h3>;
}

function App() {
  return (
    <div>
      <h1>리액트 앱 테스트!!!!</h1>
      <Test />
      <InnerComponent />
    </div>);
}

export default App;
