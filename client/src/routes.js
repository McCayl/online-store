import { ADMIN_ROUTE, BASKET, DEVICE_ROUTE, SHOP_ROUTE, SIGNIN, SIGNUP } from './utils/consts'

import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import DevicePage from './pages/DevicePage'
import Shop from './pages/Shop'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin/>
    },
    {
        path: BASKET,
        component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SIGNUP,
        component: <Auth/>
    },
    {
        path: SIGNIN,
        component: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        component: <Shop/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: <DevicePage/>
    }
]