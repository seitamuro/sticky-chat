import { useState } from "react"

export default function usePersist(ky, initVal) {
    const key = "hooks:" + ky
    const value = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        } catch (err) {
            console.log(err)
            return initVal
        }
    }

    const [savedValue, setSavedValue] = useState(value)

    const setValue = (val) => {
        try {
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        } catch (err) {
            console.log(err)
        }
    }

    return [savedValue, setValue]
}