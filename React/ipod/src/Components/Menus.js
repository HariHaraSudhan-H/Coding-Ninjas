export default function Setting(props){
    return (
        <div className={props.title}>
            <div className="title" style={{ padding: 10, fontWeight: 800, fontSize: 30,textAlign:"center" }}>{props.title}</div>
            <img src={props.img} style={{width:200,height:200}}/>
        </div>
    )
}