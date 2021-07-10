import {useContext} from 'react';
import {AuthContext} from '../components/AuthContextProvider';

export function useAuth(){
  const value = useContext(AuthContext)

  return value;
}
 
