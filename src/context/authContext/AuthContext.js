import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loggingIn, setLoggingIn] = useState(false);

    const loginHandler = async ({ email = "", password = "" }) => {
        setLoggingIn(true);
        try {
            const response = await axios.post('https://digiuncle-backend-api.onrender.com/api/users/login', {
                email,
                password,
            });
            if (response.status >= 200 && response.status < 300) {
                const authToken = response.data.token;
                setToken(authToken);
                console.log('Login successful:', authToken);
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        } finally {
            setLoggingIn(false);
        }
    };

    return (
        <AuthContext.Provider value={{
            loginHandler,
            token,
            loggingIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
