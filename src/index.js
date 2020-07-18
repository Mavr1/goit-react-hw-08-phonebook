//TODO:
// Добавь раутинг и несколько страниц:
//    /register - публичный маршрут регистрации нового пользователя с формой
//    /login - публичный маршрут логина сущестующего пользователя с формой
//    /contacts - приватный маршрут для работы с коллекцией контактов пользователя
// Добавь навигационные ссылки для перехода по маршрутам
// Добавь компонент UserMenu, состоящий из почты пользователя и кнопки Выйти
// Используй готовый живой бекенд с документацией по ссылке
// Напиши Redux-операции для работы с асинхронными запросами по паттерну request, success и error
// Добавь публичные и приватные маршруты и ссылки навигации
// Поработай над красивым оформлением интерфейса, можно использовать библиотеку компонентов, например React Bootstrap, Material-UI и другие.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
