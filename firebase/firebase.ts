// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, initializeFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCaX7rvIOo_vcYzSWIsN3eqN8_N08558bE',
	authDomain: 'the-todo-app-10e36.firebaseapp.com',
	projectId: 'the-todo-app-10e36',
	storageBucket: 'the-todo-app-10e36.appspot.com',
	messagingSenderId: '1070848604854',
	appId: '1:1070848604854:web:6aab8443bd274f30f68417',
	measurementId: 'G-PZJY18F8CP'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
