import config from '../config';
import firebase from 'firebase';

firebase.initializeApp(config.firebaseConfig);
let mainStorageRef = firebase.storage().ref();

const FirebaseService = {
  saveImage(name, image) {
    let ref = mainStorageRef.child(name);
    return ref.put(image).then((snapshot) => snapshot.ref.getDownloadURL())
  }
}

export default FirebaseService;