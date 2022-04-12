import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ENV } from './env'
import { collection, query, where, getDocs } from 'firebase/firestore'

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

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function logoutUser() {
    return firebase.auth().signOut()
}

export async function loginUser(username: string, password: string) {
    const email = `${username}@brwinc.xyz`

    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)

        return {
            successful: true,
            message: 'You have loged in!',
            result: res,
        }
    } catch (error: any) {
        // toast(error.message)
        return {
            successful: false,
            message: error.message,
        }
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@brwinc.xyz`

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)

        return {
            successful: true,
            message: 'You have register successfully!',
        }
    } catch (error: any) {
        // toast(error.message, 4000)
        return {
            successful: false,
            message: error.message,
        }
    }
}

export const db = firebase.firestore()