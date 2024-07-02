// Скачиваем и устанавливаем PostgreSQL

// npm init -y

// npm i express pg

// npm i -D nodemon

// index.js - запускаем сервер

// db.js - конфигурация БД

// Для создания БД в папке с установленным PostgreSQL/номер последней версии/bin  на вкладке "файл" открываем PowerShell от администратора
// В открывшемся терминале
    // .\psql --version - версия программы
    // .\psql -U postgres - пождключаемся к программе(запросит код, созданный при установке)
        // После подтверждения
    // \l - таблица с созданными БД
    // create database name_DB; - создать БД
    // \connect name_DB - подключение к созданной БД
    // \dt - существующие таблицы в подключенной БД
    // \! chcp 1251 - команда для нормального отображения кириллицы
    // select * from name_table; - получить все данные из таблицы 
    // create TABLE person(
    //     id SERIAL PRIMARY KEY,
    //     name VARCHAR(255),
    //     surname VARCHAR(255)
    // ); - пример создания таблицы - схемы нужных таблиц для удобства созданы в database.sql, потом запускаем в PowerShell