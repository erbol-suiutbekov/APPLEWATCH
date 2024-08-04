
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Admin from './components/Admin';
import Product from './components/Product';
import Home from './components/Home';
import Basket from './components/Basket';

function App() {
  const routesPro = [
    {
      id: 1,
      path: `/`,
      element: <Home />,
    }, 
    {
      id: 2,
      path: `/admin`,
      element: <Admin />,
    },
    {
      id: 3,
      path: `/product`,
      element: <Product />,
    },
    {
      id: 4,
      path: `/basket`,
      element: <Basket />,
    },
    
  ];
  return (
    <>
      <Header />
      <Routes>
        {routesPro.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
}

export default App
{/* <div className="">
        {
          allNumbers.map((num) => (
            <div className="star"
        style={{
          background: num <= item.rating ? 'orange' : 'gray'
        }}
        >
          
        </div>
          ))
        }
        </div> */}