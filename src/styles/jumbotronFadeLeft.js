const jumbotronFadeUpStyle = {
  style: {
    width: '95%',
    margin: '15px auto'
  },
  column: {
    boxSizing: 'border-box',
    width: '50%',
    height: '1000px',
    float: 'left',
    padding: '15px',
    fontFamily: 'Helvetica',
  },
  fadeInUp: {
    transition: '2s',
    animationName: 'fadeInUp',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  }
}


export default jumbotronFadeUpStyle;
