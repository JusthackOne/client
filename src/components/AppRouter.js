import React, { Component, useContext } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'


const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component} exact />
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component} exact />
        )}
        <Route path='*' element={<Navigate to={SHOP_ROUTE} />} exact />
    </Routes>
  )
}

export default AppRouter