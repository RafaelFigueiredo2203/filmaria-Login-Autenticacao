import {firebase} from '../services/firebase';
import {useAuth} from '../hooks/useAuth'
import {useHistory}  from 'react-router-dom';
import '../styles/homeFilmes.css';

export default function HomeFilmes() {
  const {user} = useAuth();
  const history = useHistory();
      
        async function SignOut(){
      
          const user = firebase.auth().currentUser;

          await firebase.auth().signOut().then(() => {

            history.push('/');
            user?.delete().then(() => {
              // User deleted.
            }).catch((error) => {
              // An error ocurred
              // ...
            });
            history.go(0);

            
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          }

          
      

  return(
      <div className="bd">

      <div className="profile">
        <span >Bem-Vindo</span><br />
        <img src={user?.avatar} alt="Profile foto" /><br />
        <span >{user?.name}</span><br />
        <button className="sair" onClick={SignOut}>Sair</button>
      </div>

      </div>
    );
}