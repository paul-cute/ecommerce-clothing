import Directory from '../../components/directory/directory';
import {Outlet} from 'react-router-dom'

export default function Home() {

  return (
    <div>
        <Outlet/>
        <Directory/>     
    </div>
  );
}
