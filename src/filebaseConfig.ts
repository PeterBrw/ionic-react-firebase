import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { ENV } from './env'

const config = {
    apiKey: ENV.API_KEY,
    authDomain: ENV.AUTH_DOMAIN,
    projectId: ENV.PROJECT_ID,
    storageBucket: ENV.STORAGE_BUCKET,
    messagingSenderId: ENV.MESSAGING_SENDER_ID,
    appId: ENV.APP_ID,
    measurementId: ENV.MEASUREMENT_ID,
}

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

export async function uploadFile(img: string) {
    const root = firebase.storage().ref()
    const filePath = root.child(`${makeid(5)}.jpg`)
    console.log(img)
    await filePath.putString(img, 'data_url')
}

function makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


export const db = firebase.firestore()
