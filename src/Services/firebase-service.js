import config from '../config';
import firebase from 'firebase';

firebase.initializeApp(config.firebaseConfig);
let mainStorageRef = firebase.storage().ref();

const FirebaseService = {
  saveImage(name, image) {
    let random =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let ref = mainStorageRef.child(name + random);
    return ref.put(image).then((snapshot) => snapshot.ref.getDownloadURL())
  }
}

export default FirebaseService;