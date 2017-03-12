const jumbotronStyle = {
  style: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '3%'
  },
  column: {
    all: {
      boxSizing: 'border-box',
      width: '50%'
    },
    fadeInLeft: {
      width: '40%', padding: '15px 20px'
    },
    fadeInRight: {
      width: '40%', padding: '15px 20px'
    }
  },
  fadeUp: {
    animationName: 'fadeUp',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  fadeAppear: {
    animationName: 'fadeAppear',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in',
    animationDuration: '0.6s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  fadeInLeft: {
    animationName: 'fadeInLeft',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-out',
    animationDuration: '0.7s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'both'
  }
}

jumbotronStyle.fadeInRight = Object.assign({}, jumbotronStyle.fadeInLeft, {animationName: 'fadeInRight'})


export default jumbotronStyle;
