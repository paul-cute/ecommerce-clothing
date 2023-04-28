import { initializeApp } from 'firebase/app'
import { getAuth, 
        signInWithPopup, 
        signInWithRedirect, 
        GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
      } from 'firebase/auth'
import {getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object)
  });

  await batch.commit();

  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSanpshot) => {
    const {title, items} = docSanpshot.data();
    acc[title.toLowerCase()] = items
    return acc;
  }, {});

  return categoryMap;
}

export const createUserDocumentFromAuth = async(userAuth, additionalInfo={}) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'user', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const  createAt = new Date();
    try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additionalInfo
        })
    } catch (error) {
      console.error('error creating the user', error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) =>{

  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email, password) =>{

  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email, password)
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)