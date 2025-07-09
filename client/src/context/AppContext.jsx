import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});
    const currency = import.meta.env.VITE_CURRENCY;

    //checking seller login status
    const fetchSeller = async () => {
        try {
            const { data } = await axios.get('/api/seller/is-auth, {
        withCredentials: true 
    }')
            if (data.success) {
                setIsSeller(true)
            } else {
                setIsSeller(false)

            }
        } catch (error) {
            setIsSeller(false)

        }
    }

    //checking user login status
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/is-auth', {
        withCredentials: true 
    })
            if (data.success) {
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }
        } catch (error) {
            setUser(null)
        }
    }



    const fetchProducts = async () => {
        // setProducts(DummyProducts)
        try {
            const { data } = await axios.get('/api/product/list', {
        withCredentials: true 
    })
            if (data.success) {
                setProducts(data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const addToCart = (itemId) => {
        const itemKey = String(itemId);
        let cartData = structuredClone(cartItems);

        if (cartData[itemKey]) {
            cartData[itemKey] += 1;
        } else {
            cartData[itemKey] = 1;
        }
        setCartItems(cartData);
        toast.success("Added To Cart");
    };

    const updateCartItem = (itemId, quantity) => {
        const itemKey = String(itemId);
        let cartData = structuredClone(cartItems);
        cartData[itemKey] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    };

    const removeFromCart = (itemId) => {
        const itemKey = String(itemId);
        let cartData = structuredClone(cartItems);

        if (cartData[itemKey]) {
            cartData[itemKey] -= 1;
            if (cartData[itemKey] === 0) {
                delete cartData[itemKey];
            }
        }
        setCartItems(cartData);
        toast.success("Removed From Cart");
    };

    // get cart items count
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // get cart total amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo && typeof itemInfo.offerPrice === "number") {
                totalAmount += itemInfo.offerPrice * cartItems[itemId];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchUser();
        fetchSeller();
        fetchProducts();
    }, [])

    //update database cart items
    useEffect(() => {
        const updateCart = async () => {
            try {
                const { data } = await axios.post('/api/cart/update', { cartItems }, {
        withCredentials: true 
    })
                if (!data.success) {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        if (user) {
            updateCart()
        }
    }, [cartItems])

    const value = { navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery, getCartAmount, getCartCount, axios, fetchProducts ,setCartItems}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}
