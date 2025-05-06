import './App.css';
import { Helmet } from 'react-helmet';
import { IoMenu ,IoEllipsisHorizontal } from "react-icons/io5";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MarkItDown</title>
      </Helmet>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <IoMenu className='scale-150' />
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MarkItDown</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <IoEllipsisHorizontal className='scale-150'/>
          </button>
        </div>
      </div>
    </>
  )
}
export default App;
