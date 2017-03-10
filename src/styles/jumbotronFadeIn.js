const jumbotronFadeUpStyle = {
  style: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    content: "",
    display: 'table',
    clear: 'both',
    padding: '3%'
  },
  column: {
    boxSizing: 'border-box',
    width: '50%',
    float: 'left',
    padding: '15px',
    fontFamily: 'Helvetica',
  },
  fadeIn: {
    transition: '2s',
    animationName: 'fadeIn',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  }
}


export default jumbotronFadeUpStyle;
