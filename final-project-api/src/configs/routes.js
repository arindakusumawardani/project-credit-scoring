
import React from "react";

import CustomerList from "../pages/customer/customerList";
import TransactionList from "../pages/transaction/transactionList";
import CustomerForm from "../pages/customer/customerForm";
import SignIn from "../pages/login/SignIn";
import HomeMaster from "../pages/home/HomeMaster";
import SignUp from "../pages/login/signUpForm/SignUp";
import TransactionForm from "../pages/transaction/transactionForm";
import CustomerDetail from "../pages/customer/CustomerDetail";
import AccountList from "../pages/login/accountList/AccountList";

const routes = [
    {
        path: '/',
        component: <SignIn />,
        exact: true
    },
    {
        path: '/customer',
        component: <CustomerList />,
        exact: true
    },
    {
        path: '/master/home',
        component: <HomeMaster />,
        exact: true
    },
    {
        path: '/register',
        component: <SignUp />,
        exact: true
    },
    {
        path: '/customer/form',
        component: <CustomerForm />,
        exact: true
    },
    {
        path: '/customer/:id/edit',
        component: <CustomerForm />,
        exact: true
    },
    {
        path: '/master/transaction',
        component: <TransactionList />,
        exact: true
    },
    {
        path: '/transaction/form/:id',
        component: <TransactionForm />,
        exact: true
    },
    {
        path: '/customer/:id/detail',
        component: <CustomerDetail />,
        exact: true
    },
    {
        path: '/users',
        component: <AccountList/>,
        exact: true
    }

];

export default routes
