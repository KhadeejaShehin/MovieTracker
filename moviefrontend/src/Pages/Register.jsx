import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { add_Movie } from '../Services/api';


function Register() {
  const [movies, setMovies] = useState({
    title: '',
    director: '',
    content_type: '',
    genre: '',
    platform: '',
    status: '',
    total_episodes: 0,
    episodes_watched: 0,
    rating: 0,
    review: ''
  });

  async function saveMovies( ) {
   let result = await add_Movie(movies)
  }

  const containerStyle = {
    padding: '3rem',
    backgroundImage: 'url("https://i.pinimg.com/736x/b8/3c/74/b83c74447fa290e487209a953e0bd6e7.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white'
  };

  const formCardStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '2rem',
    borderRadius: '8px'
  };

  return (
    <div id="register" style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'black' }}>Add Movie / TV Show</h1>
      
    
      <Form onSubmit={saveMovies} style={formCardStyle}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setMovies({ ...movies, title: e.target.value })} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Director</Form.Label>
            <Form.Control type="text" placeholder="Enter Director" onChange={(e) => setMovies({ ...movies, director: e.target.value })} />
          </Form.Group>
        </Row>
    <Row className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select aria-label="Select genre" onChange={(e) => setMovies({ ...movies, genre: e.target.value })}>
            <option value="ALL">Choose Genre</option>
            <option value="romance">Romance</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="action">Action</option>
          </Form.Select>
        </Form.Group>
    </Row>
    
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Content Type</Form.Label>
            <Form.Select
              onChange={(e) => setMovies({ ...movies, content_type: e.target.value })}
              aria-label="Content Type"
            >
              <option value="">Choose Type</option>
              <option value="movie">Movie</option>
              <option value="tv Show">TV Show</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Platform</Form.Label>
            <Form.Select aria-label="Select platform" onChange={(e) => setMovies({ ...movies, platform: e.target.value })}>
              <option value="">Choose Platform</option>
              <option value="netflix">Netflix</option>
              <option value="prime">Prime</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Select status" onChange={(e) => setMovies({ ...movies, status: e.target.value })}>
              <option value="">Choose Status</option>
              <option value="watching">Watching</option>
              <option value="completed">Completed</option>
              <option value="wishlist">Wishlist</option>
            </Form.Select>
          </Form.Group>
        </Row>

          {movies.content_type === 'tv Show' && (     
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Total Episodes</Form.Label>
              <Form.Control type="number" placeholder="Total Episodes" onChange={(e) => setMovies({ ...movies, total_episodes: e.target.value })} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Episodes Watched</Form.Label>
              <Form.Control type="number" placeholder="Episodes Watched" 
               onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= movies.total_episodes) {
                      setMovies({ ...movies, episodes_watched: value });
                    } else {
                      alert("Watched episodes cannot be greater than total episodes");
                      setMovies({ ...movies, episodes_watched: 0 }); 
                    }
                }} />
            </Form.Group>
          </Row>
)}

    {movies.status === 'completed' && (   
           <Row className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" max={10} min={1} placeholder="Rating (1-10)" onChange={(e) => setMovies({ ...movies, rating: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your thoughts..." onChange={(e) => setMovies({ ...movies, review: e.target.value })} />
        </Form.Group>
        </Row> 
)}
        <Button type="submit" variant="warning" style={{ fontWeight: 'bold', width: '100%' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
