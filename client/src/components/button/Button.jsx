import './button.css';

export default function Button(props) {
  return (
    <div className="button">

        <button onClick={props.onClick} className="btn btn1 ">{props.children}</button>
      
    </div>
  )
}
