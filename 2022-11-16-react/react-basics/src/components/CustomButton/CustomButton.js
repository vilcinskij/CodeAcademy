import './CustomButton.css'

export default function CustomButton(props) {
    return (
    <button className='Custom-button'>{props.text}</button>
    );
  }