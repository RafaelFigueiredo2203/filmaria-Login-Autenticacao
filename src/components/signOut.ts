import {firebase} from '../services/firebase';

export default function SignOut () {
  
  async function SignOut(){
  await firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  }
  return(
    SignOut()
  );
}