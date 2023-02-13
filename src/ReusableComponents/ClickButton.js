
function ClickButton({icon, onClick, style, value}) {
    return (
        <div className='hover-text'>
            <button 
            className= {style}
            onClick={(event) => onClick(event)}>
            {icon}
            </button>
            {value &&
                <span>{value}</span>
            }
            
       </div>
    );
}

export default ClickButton;