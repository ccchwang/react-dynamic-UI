const navbarStyle = {
  nav: {
    width: '100%',
    height: '70px',
    position: 'fixed',
    top: '0',
    zIndex: '200',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    animationName: 'navbarFadeIn',
    animationPlayState: 'paused',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  },
  column: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    display: 'inline-block',
    padding: '20px',
    transition: '0.3s'
  }

}


navbarStyle.itemHover = Object.assign({}, navbarStyle.item, {cursor: 'pointer', color: '#3f7882'})


export default navbarStyle;
