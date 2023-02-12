
function ClickButton({icon, onClick, style, value}) {
    return (
        <div className='hover-text'>
            <button 
            className= {style}
            onClick={() => onClick()}>
            {icon}
            </button>
            <span>{value}</span>
       </div>
    );
}

export default ClickButton;