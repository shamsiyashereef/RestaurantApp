import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://th.bing.com/th/id/R.4ab85d040469331b71a3fb93613c6886?rik=%2fre8bg5riHTLng&riu=http%3a%2f%2fwww.joscogroup.com%2fassets%2fimages%2ftonicocafe.png&ehk=i2fRGKjlMuATS4zmuCouYFfwOEcSEsrwEIqw4Zxyo%2fQ%3d&risl=&pid=ImgRaw&r=0"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Tonico cafe
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header