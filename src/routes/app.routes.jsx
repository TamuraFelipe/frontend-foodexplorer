import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewDishe } from '../pages/NewDishe';
import { Details } from '../pages/Details';
import { Edit } from '../pages/Edit';
import { Cart } from '../pages/Cart';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/newdishe' element={<NewDishe />}/>
            <Route path='/details/:id' element={<Details />}/>
            <Route path='/edit/:id' element={<Edit />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    );
};