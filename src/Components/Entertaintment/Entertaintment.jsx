import React from 'react'
import styles from './Entertaintment.module.css'

export const Entertaintment = ({data:entertaintmentData}) => {
   
    return (
        <div>
            <h2 className={styles.heading}>ENTERTAINTMENT Gifs</h2>
            {
                entertaintmentData.map((data,i) => {
                    const {images} = data;
                    const original = images ? images.original : null;
                    const url = original ? original.url : null;
                    return <img key={i} className={styles.images} src={url} />
                })
            }
        </div>
    )
}
