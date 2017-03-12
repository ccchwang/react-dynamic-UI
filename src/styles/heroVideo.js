const heroVideoStyle = {
  style: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '680px',
    overflow: 'hidden'
  },
  headingStyle: {
    position: 'absolute',
    width: '40%',
    color: 'white',
    zIndex: '2',
    top: '250px',
    right: '8%',
    fontSize: '2em',
    textAlign: 'center'
  },
  video: {
    objectFit: "cover",
    width: '100%',
    minHeight: '680px'
  }
}


//make top go from -290 to -270 has user makes height taller

export default heroVideoStyle;
