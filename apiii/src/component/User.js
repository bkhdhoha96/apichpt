import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{display:'flex',justifyContent:'space-around', flexWrap:'wrap', padding:40}}>
    
        {listOfUsers.map(user => (
          <div key={user.id}>
      
    <Card style={{ width: '30rem' }}>
    <Card.Header>{user.name}</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{user.username}</ListGroup.Item>
      <ListGroup.Item>{user.address.street}</ListGroup.Item>
      <ListGroup.Item>{user.address.city}</ListGroup.Item>
    </ListGroup>
  </Card>
  </div>
 
   ))};
  </div>
  );
}

export default UserList;