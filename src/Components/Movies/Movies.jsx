import React from 'react'
import styles from './Movies.module.css'

export const Movies = ({data:moviesData}) => {

    return (
        <div>
            <h2 className={styles.heading}>MOVIES Gifs</h2>
            {
                moviesData.map((data,i) => {
                    const {images} = data;
                    const original = images ? images.original : null;
                    const url = original ? original.url : null;
                    return <img src={url} key={i} className={styles.images} alt={data.title}/>
                })
            }
        </div>
    )
}
