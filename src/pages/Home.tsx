import '../styles/homeStyle.css';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import FBLogo from '../assets/facebook.png';
import GoogleLogo from '../assets/icons8-google-logo.svg';
import GithubLogo  from '../assets/icons8-github.svg';





export default function Home(){

  const history = useHistory();
  const {user, signInWithGoogle, FacebookSign, GitHubSign} = useAuth();

  async  function LoginGoogle(){
    if(!user){
      await signInWithGoogle()
    }
    history.push('/HomeFilmes');
   
 }
 
  async function LoginFacebook(){
    if(!user){
      await FacebookSign()
    }
    history.push('/HomeFilmes');
    
  }
  async function LoginGitHub(){
    if(!user){
      await GitHubSign()
    }
    history.push('/HomeFilmes');
    
  }
  return(
  <div className="body">
     <div className="login">
       <h1>Filmaria</h1>
       <br/>
       <span className="home-entre">Entre com:</span>
      <br/>
       <button className="facebook" onClick={LoginFacebook}>
         <img src={FBLogo}  alt="logoFacebook"/>
         
         Facebook
         </button>
       
       <button className="google" onClick={LoginGoogle} >
       <img src={GoogleLogo}  alt="logoFacebook"/>
      
       Google
       </button>

       <button className="github" onClick={LoginGitHub}>
       <img src={GithubLogo}  alt="logoFacebook"/>
         Github
         </button>
       <br/>
      
     </div>
  </div>
  );
}