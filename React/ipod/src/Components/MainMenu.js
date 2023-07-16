import React from "react";
import '../Styles/mainMenuStyles.css';
class Screen extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: ['Coverflow', 'Settings', 'Games', 'Music']
        }
    }

    render() {
        return <div className="Menu" style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:150}}>
                <div className="title" style={{ padding: 10, fontWeight: 800, fontSize: 30 }}>MainMenu</div>
                <ul>
                    {this.props.data.map((menuItem) => {
                        return <li key={menuItem.id} id={'menu-'+menuItem.id} className="menuItem">{menuItem.title}</li>
                    })}
                </ul>
            </div>
            <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0' style={{ width: 150,borderBottomRightRadius:15,borderTopRightRadius:15 }} />

        </div>
    }
}

export default Screen;