import styles from "./Block.module.css"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const Block = ({ mirroring, title, description, navlinkText, link, blackWrapperText, backgroundColor }) => {
    const [firstWrapperStyle, setFirstWrapperStyle] = useState()
    const [wrapperStyle, setWrapperStyle] = useState()

    useEffect(() => {
        if (mirroring) {
            setFirstWrapperStyle({
                ...firstWrapperStyle,
                flexDirection: "row-reverse"
            })
        }
    }, [])

    useEffect(() => {
        setWrapperStyle({
            ...wrapperStyle,
            backgroundColor: backgroundColor
        })
    }, [])
    return (
        <div className={styles.firstWrapper} style={firstWrapperStyle}>
            <div className={styles.wrapper} style={wrapperStyle}>
                <div className={styles.wrapperForText}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <button className={styles.button}>{navlinkText}</button>
                </div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.blackWrapperText}>{blackWrapperText}</p>
            </div>
        </div>
    )
}

export default Block