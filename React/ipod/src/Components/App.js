import React from 'react';
import '../Styles/app.css';
import MainMenu from './MainMenu';
import Setting from './Menus';
const ZingTouch = require('zingtouch');


class App extends React.Component {
  constructor() {
    super();
    this.data = [{
      id: 0,
      title: "Coverflow",
      img: 'https://ayush-kanduri.github.io/Mini-Ipod-App-ReactJS/static/media/coverflow.eb883fee.png'
    }, {
      id: 1,
      title: "Settings",
      img: 'https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png'
    }, {
      id: 2,
      title: "Games",
      img: 'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2014/04/18130043/online-gamer-threats-featured.jpg'
    }, {
      id: 3,
      title: "Music",
      img: 'https://sg-res.9appsdownloading.com/sg/res/jpg/14/24/a59bcc608c631dc740e158f42df6-en21.jpg?x-oss-process=style/mq200'
    }]
    this.state = {
      currentRender: MainMenu,
      title: '',
      img: ''
    }
    this.menuVisible = true
    this.currentMenuId = 0
  }

  componentDidMount() {
    document.getElementById('menu-' + this.currentMenuId).style.backgroundColor = 'blue';
    let containerElement = document.getElementById('rectangle');
    var activeRegion = ZingTouch.Region(containerElement);
    var childElement = document.getElementById('circle');
    if (this.menuVisible) {
      activeRegion.bind(childElement, 'rotate', (event) => {
        const oldMenuId = this.currentMenuId;
        const angle = event.detail.angle;
        if (angle >= 0 && angle <= 90) {
          this.currentMenuId = 0;
        } else if (angle > 90 && angle <= 180) {
          this.currentMenuId = 1;
        } else if (angle > 180 && angle <= 270) {
          this.currentMenuId = 2;
        } else if (angle > 270 && angle <= 360) {
          this.currentMenuId = 3;
        } else if (angle >= -90 && angle < 0) {
          this.currentMenuId = 3;
        } else if (angle >= -180 && angle < -90) {
          this.currentMenuId = 2;
        } else if (angle >= -270 && angle < -180) {
          this.currentMenuId = 1;
        } else if (angle >= -360 && angle < -270) {
          this.currentMenuId = 0;
        } else {
        }
        if (this.menuVisible) {
          document.getElementById('menu-' + oldMenuId).style.backgroundColor = 'white';
          document.getElementById('menu-' + this.currentMenuId).style.backgroundColor = 'blue';
        }

      })
    }

  }

  // Handles when MENU icon is clicked and render main menu
  handleMenuIcon = () => {
    console.log('Menu clicked', this.state);
    this.setState({ currentRender: MainMenu, title: '', img: '' });
    this.menuVisible = true;
    this.currentMenuId = 0;
  }

  // Handles when center icon is clicked and render sub-menus
  handleMenuClick = () => {
    console.log('Entering Menu ', this.data[this.currentMenuId].title)
    this.setState({ currentRender: Setting, ...this.data[this.currentMenuId] })
    this.menuVisible = false;
  }
  
  render() {
    return (
      <div className="App">
        <div className='app'>
          <div className='display'>
            <this.state.currentRender title={this.state.title} img={this.state.img} data={this.data}/>
          </div>
          <div className="rectangle" id='rectangle'>
            <div className="circle" id='circle'>
              <div className='menuIcon' onClick={this.handleMenuIcon}>MENU</div>
              <div ><img src='https://cdn.icon-icons.com/icons2/2550/PNG/512/fast_forward_icon_152617.png' className='forwardIcon icon' alt='forward' /></div>
              <img src='https://cdn.icon-icons.com/icons2/2550/PNG/512/fast_forward_icon_152617.png' className='rewindIcon icon' alt='rewind' />
              <img src='https://cdn.icon-icons.com/icons2/2226/PNG/512/play_icon_134504.png' className='icon playIcon' alt='play' />
              <div className='innerCircle' onClick={this.handleMenuClick}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
