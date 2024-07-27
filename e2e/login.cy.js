describe('Проверка авторизации',function () {
    it ('Верный пароль и верный логин', function () {
        cy.visit ('https://login.qa.studio/');// зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль"
        cy.get('#mail').type ('german@dolnikov.ru'); //ввели вверный логин
        cy.get('#pass').type ('iLoveqastudio1');// ввели вверный пароль
        cy.get('#loginButton').click(); //нажала Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации я вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
})

describe('Проверка авторизации',function () {
    it (' Забыли пароль', function () {
        cy.visit ('https://login.qa.studio/');// зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль"
        cy.get('#mail').type ('german@dolnikov.ru'); //ввели вверный логин
        cy.get('#forgotEmailButton').click(); // нажала кнопку Забыли пароль
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Проверяю, что после нажатия кнопки я вижу текст
        cy.get('#forgotForm > .header').should('be.visible'); // текст виден пользователю
        cy.get('#mailForgot').type ('german@dolnikov.ru'); //ввели вверный логин
        cy.get('#restoreEmailButton').click(); //нажала Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после нажатия кнопки, я вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
})

describe('Проверка негативной авторизации с неверным паролем',function () {
    it (' Неверный пароль', function () {
        cy.visit ('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type ('german@dolnikov.ru'); //ввели вверный логин
        cy.get('#pass').type ('iLoveqastudio');// ввели неверный пароль
        cy.get('#loginButton').click(); //нажала Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после нажатия кнопки я вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
            })
})


describe('Проверка авторизации с логином без @',function () {
    it ('Логин без @', function () {
        cy.visit ('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type ('germandolnikov.ru'); //ввели неверный логин
        cy.get('#pass').type ('iLoveqastudio1');// ввели верный пароль
        cy.get('#loginButton').click(); //кнопка Войти не кликабельна
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после нажатия кнопки я вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
        })
})


    describe('Проверка негативной авторизации с неправильным логином',function () {
        it (' Неверный логин', function () {
            cy.visit ('https://login.qa.studio/');// зашли на сайт
            cy.get('#mail').type ('german@dolnikovс.ru'); //ввели неверный логин
            cy.get('#pass').type ('iLoveqastudio1');// ввели верный пароль
            cy.get('#loginButton').click(); //нажала Войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после нажатия кнопки я вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
           })
    })

    describe('Проверка  авторизации со строчными буквами в логине',function () {
        it (' Строчный логин', function () {
            cy.visit ('https://login.qa.studio/');// зашли на сайт
            cy.get('#mail').type ('GerMan@Dolnikov.ru'); //ввели логин с заглавными буквами
            cy.get('#pass').type ('iLoveqastudio1');// ввели верный пароль
            cy.get('#loginButton').click(); //нажала Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после нажатия кнопки я вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
           })
    })