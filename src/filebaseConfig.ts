import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { toast } from './toast'
import { ENV } from "./env"

const config = {
    apiKey: ENV.API_KEY,
    authDomain: ENV.AUTH_DOMAIN,
    projectId: ENV.PROJECT_ID,
    storageBucket: ENV.STORAGE_BUCKET,
    messagingSenderId: ENV.MESSAGING_SENDER_ID,
    appId: ENV.APP_ID,
    measurementId: ENV.MEASUREMENT_ID,
}

console.log(config)

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
