import { Outlet } from 'react-router';
import Sidebar from './components/Sidebar';

const App = () =>{
  return (
    <div className="w-screen h-screen bg-[#202020]">
      <div className="w-full flex flex-col items-center">
        <Sidebar />
        <div className="flex-1 h-full bg-red-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App
