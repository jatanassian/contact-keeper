import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User (check which user is logged in)

  // Register User (sign the user up and get the token back)

  // Login User (log the user in and get the token)

  // Logout (destroy the tokan and clear everything)

  // Clear Errors (clear errors in the state)

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
