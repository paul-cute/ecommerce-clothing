import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAdVpR8CHijCx25lqNRd4YYA9ViXGh48HY",
    authDomain: "crwn-cloth-e1cb7.firebaseapp.com",
    projectId: "crwn-cloth-e1cb7",
    storageBucket: "crwn-cloth-e1cb7.appspot.com",
    messagingSenderId: "202853658335",
    appId: "1:202853658335:web:69e533b50368cdbee6c36a"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'user', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const  createAt = new Date();
    try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt
        })
    } catch (error) {
      console.error('error creating the user', error.message)
    }
  }

  return userDocRef;
}