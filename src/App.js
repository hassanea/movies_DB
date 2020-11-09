/* React PHP tutorial link: https://fahmidasclassroom.com/category/web-programming/reactjs/ */
import React from "react";
import { hot } from 'react-hot-loader/root'
import "./App.css";
import './App.scss';
import Nav from './Nav';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
    
constructor(props) {
  super(props);
  this.state = {
    movieData:[]
  };
}
    
 componentDidMount() {
    this.getmovieData();
}
    
    
getmovieData = () => {
    
fetch('http://localhost:4000/movies', {
          method: "GET",
          mode: 'cors',
          headers: {'Content-Type': 'application/json; charset=UTF-8', "access-control-allow-origin": "*", "access-control-allow-headers": "*", 'Accept': 'application/json'},
      })
      .then(response => response.json())
      .then(response => this.setState({ movieData: response.data }))
      .catch(error => console.error(error))
}   
       
    
    
  render(){
      
      const { movieData } = this.state;
      const headTitle = 'Hello, World';
      console.log(movieData);
      
      const imgstyle = {
        border: '2px solid #000',  
      };
      
    return(
      <div className="App">
        <Nav/>
        <main id="mainContent" tabIndex="-1">
        <Container>
         <Row>
          <Col md="12" className="text-center">
           <h1> {headTitle} <span><ion-icon name="videocam"></ion-icon></span></h1> <br/>
        
            <p className="lead font-weight-bolder">{movieData.map(movie =>
        <span key={movie.MOVIE_ID}>{movie.MOVIE_ID} | {movie.MOVIE_NAME} | {movie.MOVIE_DESC} | {movie.MOVIE_RELEASE_DATE} | {movie.MOVIE_GENRE} <br/> <img src={movie.MOVIE_IMG_URL} alt={movie.MOVIE_NAME + ' movie poster'} className="w-25 my-5" style={imgstyle}/> <br/> </span>
        )}</p>
        
          </Col>
         </Row>
        </Container>
        </main>
      </div>
    );
  }
}

export default hot(App);