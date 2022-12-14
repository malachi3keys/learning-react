export default function Die(props) {
    return (
        <div className={`die ${props.isHeld ? "correct" : ""}`}>
            <div className='die-txt'
                onClick={() => props.handleHold(props.id, props.isHeld)}
            >{props.value}</div>
        </div>
    )
}