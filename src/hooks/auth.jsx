import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useCart } from "./cart";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setaData] = useState({});
    const [loading, setLoading] = useState(false);

    const {setCart} = useCart();
    
    async function signIn({ email, password }){
        
        try {
            setLoading(true)
            const response = await api.post("/sessions", {email, password});
            const { user, token } = response.data;
            
            localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodExplorer:token", token);
            
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setaData({ user, token })
        
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível conectar!")
            }
        } finally {
            setLoading(false)
        }
    }
    
    function signOut(){
        localStorage.removeItem("@foodExplorer:token");
        localStorage.removeItem("@foodExplorer:user");

        localStorage.removeItem("@foodExplorer:cart");
        
        setaData({});
        
    }

    useEffect( () => {
        const token = localStorage.getItem("@foodExplorer:token");
        const user = localStorage.getItem("@foodExplorer:user")
        
        if(token && user) {
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setaData({ 
                user: JSON.parse(user), 
                token, 
                })
        }
    }, []);

    return(
        <AuthContext.Provider value={{ 
            signIn,
            signOut, 
            user: data.user, 
            loading,
            }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const context = useContext(AuthContext);
    
    return context;
}

export {
    AuthProvider,
    useAuth,
};