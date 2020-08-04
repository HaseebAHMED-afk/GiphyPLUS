import React from 'react'
import styles from './Sports.module.css'

export const Sports = ({data:sportsData}) => {
    
    
    return (
        <div>
            <h2 className={styles.heading}>SPORTS Gifs</h2>
            {
                sportsData.map((data,i)=>{
                    const { images } = data;
                    const original = images ? images.original : null;
                    const url = original ? original.url : null;
                    return <img key={i} src={url} className={styles.images} />
                })
            }
        </div>
    )
}
