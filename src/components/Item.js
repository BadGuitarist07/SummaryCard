import '../css/styleItem.css'

function Item( {score, category, icon, bgColor, textColor} ) {
    return (
        <div className='item-card' style={{backgroundColor: bgColor, color: textColor}}>
            <div className='item-flex-left'>
                <img src={icon} alt={`${category}`}/>
                <p>{category}</p>
            </div>
            <div className='item-flex-right'>
                <p>{score} / 100</p>
            </div>
        </div>
    )
}

export default Item