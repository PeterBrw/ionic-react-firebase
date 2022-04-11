import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { toast } from './toast'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = `${username}@brwinc.xyz`

    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error: any) {
        toast(error.message)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@brwinc.xyz`

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)

        console.log(res)
        return true
    } catch (error: any) {
        toast(error.message, 4000)
        return false
    }
}
