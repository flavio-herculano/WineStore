import React, {useState, useEffect,createContext} from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "services/api";

export const AuthContext = createContext();

export const Auhprovider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const recoveredUser = localStorage.getItem('id');

        if (recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    },[]);


    const login = async (cpf, pass) => {
        const response = await createSession(cpf, pass);
        
        console.log("login", response.data);
        
        
        // criar session
        const loggedUser =response.data.id;


        localStorage.setItem("id", JSON.stringify (loggedUser));
        
        
            setUser(loggedUser);
        navigate("/");
            
    };

    const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/Login");    
    };

    return(
       
        <AuthContext.Provider value={{authenticated:
            !!user, user, loading,login, logout}}>
        {children}
        </AuthContext.Provider>
        );
        

}

