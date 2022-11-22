import './Sidebar.css'

export default function Sidebar(props) {
    return (
        <div className="sidebar">
              {props.children}
            </div>
    )
}