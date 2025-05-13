import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store full user data
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [userId, setUserId] = useState(() => localStorage.getItem("userId"));    // const fetchUserProfile = async () => {
    //     try {
    //         const res = await axios.get(`${process.env.REACT_APP_BASE_URI}/api/v1/users/getFullProfileById/${userId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });
    //         setUser(res.data.data?.user);
    //     } catch (error) {
    //         console.error("Error fetching user profile:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     if (userId && localStorage.getItem("token")) {
    //         fetchUserProfile();
    //     } else {
    //         setLoading(false);
    //     }
    // }, []);
    console.log('useruseruser', user);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URI}/api/v1/users/getFullProfileById/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(res.data.data?.user);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token && userId) {
            fetchUserProfile();
        } else {
            setUser(null);
            setLoading(false);
        }
    }, [token, userId]);


    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
