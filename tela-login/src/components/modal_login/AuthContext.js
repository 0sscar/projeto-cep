import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const checkLoginStatus = async () => {
    try {
      const lastLoginTime = await AsyncStorage.getItem('lastLoginTime');
      if (lastLoginTime !== null) {
        const now = Date.now();
        const difference = now - parseInt(lastLoginTime);
        const interval = 3600000; // 1 hora

        if (difference < interval) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking login status', error);
      setIsAuthenticated(false);
    } finally {
      setCheckingSession(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkLoginStatus }}>
      {checkingSession ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
