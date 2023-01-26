import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions"
import styles from "./Cookies.module.css"

const Cookies = () => {
    const dispatch = useDispatch()
    const [storage, setStorage] = useState()
    useEffect(() => {
      setStorage(JSON.parse(localStorage.getItem("cookies")))
    }, [])
    useEffect(() => {
      if(storage){
        dispatch(actions.SET_COOKIES(storage))
      }
    }, [storage]) 
    return (
        <div className={styles.firstWrapper}>
            <div className={styles.wrapper}>
                <p className={styles.paragraph}>We actually only use necessary functional cookies here. No ads or tracking cookies.</p>
                <button className={styles.button} onClick={() => {
                    localStorage.setItem("cookies", true)
                    dispatch(actions.SET_COOKIES(JSON.parse(localStorage.getItem("cookies"))))
                }}>Got it!</button>
            </div>
        </div>
    )
}

export default Cookies