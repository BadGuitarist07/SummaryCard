import '../css/styleCard.css'
import '../css/styleItem.css'
import itemIconReaction from '../assets/images/icon-reaction.svg'
import itemIconMemory from '../assets/images/icon-memory.svg'
import itemIconVerbal from '../assets/images/icon-verbal.svg'
import itemIconVisual from '../assets/images/icon-visual.svg'
import Item from './Item'
import { useEffect, useState } from 'react'


function Card () {
    const [averageScore, setAverageScore] = useState(0);
    const data = [
        
            {
                "id": "1",
                "category": "Reaction",
                "score": 76,
                "icon": itemIconReaction,
                "bgColor": 'hsla(0, 100%, 67%, 0.080)',
                "txtColor": 'hsla(0, 100%, 67%, 0.5)'
            },
            {
                "id": "2",
                "category": "Memory",
                "score": 90,
                "icon": itemIconMemory,
                "bgColor": 'hsla(39, 100%, 56%, 0.080)',
                "txtColor": 'hsla(39, 100%, 56%, 0.5)'

            },
            {
                "id": "3",
                "category": "Verbal",
                "score": 84,
                "icon": itemIconVerbal,
                "bgColor": 'hsla(166, 100%, 37%, 0.080)',
                "txtColor": 'hsla(166, 100%, 37%, 0.5)'
            },
            {
                "id": "4",
                "category": "Visual",
                "score": 96,
                "icon": itemIconVisual,
                "bgColor": 'hsla(234, 85%, 45%, 0.080)',
                "txtColor": 'hsla(234, 85%, 45%, 0.5)'
            }
    ]

    useEffect(() => {
        const sum = data.reduce((acc, item) => acc + item.score, 0);  
        const average = Math.round( sum / data.length)
        setAverageScore(average)
    }, [data]);

    return (

    <div className='container'>
        <div className='all-card'>
            <div className='results-card'>
                <p className='title-results-card'>
                    Your Result
                </p>
                <div className='circle-results-card'>
                    <h1>{averageScore}</h1>
                    <p>of 100</p>
                </div>
                <div className='text-results-card'>
                    <h2>Great</h2>
                    <p>Yoir scored higher than 65% of
                        the people who have taken 
                        these test.
                    </p>
                </div>
            </div>
            <div className='summary-card'>
                <p className='title-summary-card'>
                    Summary
                </p>
                <div>   
                    {data.map((item, index) => (
                        <Item 
                            key={index}
                            category = {item.category}
                            score = {item.score}
                            icon = {item.icon}
                            bgColor={item.bgColor}
                            textColor={item.txtColor}
                        />
                    ))}
                </div>
                <a href='#top'>Continue</a>
            </div>
        </div>
    </div>
    )
}

export default Card