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
    transition: '0.25s'
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


navbarStyle.itemHover = Object.assign({}, navbarStyle.item, {cursor: 'pointer', color: '#2d6d73'})


export default navbarStyle;
