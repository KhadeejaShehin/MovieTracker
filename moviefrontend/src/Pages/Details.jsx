import React from 'react';
import Table from 'react-bootstrap/Table';
import { get_All_Movie } from '../Services/api';
import { useState,useEffect } from 'react';

function Details() {


const [movies, setMovies] = useState([]);
const [selectedGenre, setSelectedGenre] = useState("ALL");

  async function display_deatils(){
    let result = await get_All_Movie();
   // console.log(result);
   if (result.status > 199 && result.status < 300){
      setMovies(result.data)
   }
  }

  useEffect(() => {
    display_deatils();
  }, []);

  const containerStyle = {
    backgroundImage: 'url("https://i.pinimg.com/736x/b8/3c/74/b83c74447fa290e487209a953e0bd6e7.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem'
  };

  const headingStyle = {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
  };

  const tableCardStyle = {
    width: '100%',
    background: 'rgba(0,0,0,0.6)',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
  };

  

  return (
    <div id="details" style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' , color: 'black'}}>Display Details</h1>
      <div style={tableCardStyle}>
        
<select
  className='form-select mb-3'
  value={selectedGenre}
  onChange={(e) => setSelectedGenre(e.target.value)}
>
  <option value="ALL">All Genres</option>
  <option value="action">Action</option>
  <option value="comedy">Comedy</option>
  <option value="fantasy">Fanatasy</option>
  <option value="romance">Romance</option>

</select>

        <Table striped bordered hover responsive="sm" variant="dark">
          <thead>

          <tr>
             
              <th>Title</th>
              <th>Content Type</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Platform</th>
              <th>Status</th>
              <th>Total Episodes</th>
              <th>Episodes Watched</th>
              <th>Rating</th>
              <th>Review</th>
            
            </tr>
             
             
          </thead>
          <tbody>
            {
  

   movies
      .filter((i) => {
        if (selectedGenre === "ALL") return true;
        return i.genre?.toLowerCase() === selectedGenre.toLowerCase();
      })

   .map((i) => (
        <tr key={i.id}>
                  <td>{i.title}</td>
                  <td>{i.content_type}</td>
                  <td>{i.director}</td>
                  <td>{i.genre}</td>
                  <td>{i.platform}</td>
                  <td>{i.status}</td>
                  <td>{i.total_episodes}</td>
                  <td>{i.episodes_watched}</td>
                  <td>{i.rating}</td>
                  <td>{i.review}</td>
                  
                </tr>

              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Details;
