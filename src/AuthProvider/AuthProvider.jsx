import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOuT = () => {
        return signOut(auth)

    }
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)

    }
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(user, 'OBSERVE USER', currentUser);
        })
        return unSubsCribe
    }, [])

    const value = {
        user,
      
        createUser,
        logIn,
        logOuT,
        loginWithGoogle,
        setLoading


    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;