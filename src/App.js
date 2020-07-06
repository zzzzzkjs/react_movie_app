import React from 'react';
import Movie from './components/Movie';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트
class App extends React.Component {
  // React.Component 클래스 상속받은 App 클래스 생성
  render() {
    return (
      <div>
        <h1>
          &lt;영화 목록&gt; - state : {this.state.count}&nbsp;
          <button onClick={this.addCount}>Add</button>
          <button onClick={this.minusCount}>Minus</button>
        </h1>
        {movieList.map(movie => (
          <Movie key={movie.id} title={movie.title} score={movie.score} image={movie.image}/>
        ))}
      </div>
    );
  }
  state = {
    count: 0
  };

  addCount = () => {
    // current로 현재 state가 넘어옴
    this.setState(current => ({
      count: current.count + 1
    }));
  }
  
  minusCount = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  }
}

// 함수형 컴포넌트
// function App() {
//   return (
//     <div>
//       <h1>&lt;영화 목록&gt;</h1>
//       {movieList.map(movie => (
//         <Movie key={movie.id} title={movie.title} score={movie.score} image={movie.image}/>
//       ))}
//     </div>
//   );
// }

// 영화 목록(임시데이터 하드코딩)
const movieList = [
  {
    id: 1, // 컴포넌트 key로 사용할 값(key의 경우 리액트 내부에서 사용하는 props여서 전달 안됨)
    title : "아이언맨:윈터솔져",
    score : 8.83,
    image : "https://upload.wikimedia.org/wikipedia/ko/f/f1/%EC%BA%A1%ED%8B%B4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4_%EC%9C%88%ED%84%B0_%EC%86%94%EC%A0%B8.jpg"
  },
  {
    id : 2,
    title : "캡틴아메리카:시빌 워",
    score : 8.12,
    image : "https://upload.wikimedia.org/wikipedia/ko/a/af/%EC%BA%A1%ED%8B%B4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4_%EC%8B%9C%EB%B9%8C_%EC%9B%8C.jpg"
  },
  {
    id : 3,
    title : "스파이더맨:홈 커밍",
    score : 7,
    image : "https://upload.wikimedia.org/wikipedia/ko/c/cb/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8_%ED%99%88%EC%BB%A4%EB%B0%8D.jpg"
  }
];

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default App;
