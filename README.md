# To-do Web Manager

# Содержание

1. [Описание приложения](#intro)<br/>
2. [Составляющие проекта](#project_components)<br/>
   2.1 [База данных](#bd)<br/>
   2.2 [Backend](#backend)<br/>
   2.3 [Frontend](#frontend)<br/>
3. [Основной функционал проекта](#main_functional)<br/>
4. [Схема взаимодействия компонентов проекта](#project_scheme)<br/>
5. [Графический материал](#graph_materials)<br/>
   5.1 [Диаграммы](#graph_materials)<br/>
   5.2 [Скриншоты](#graph_materials)<br/>
6. [Исходный код проекта](#source_code)<br/>
   6.1 [Frontend](#source_code)<br/>
   6.2 [Backend](#source_code)<br/>
   6.3 [Data Base](#source_code)<br/>
7. [Тестирование](#testing)<br/>
   7.1 [Основные аспекты	тестирования](#testing_aspects)<br/>
   7.1.1 [Цели] (#testing_goals)<br/>
   7.1.2 [Виды] (#testing_vars)<br/>
   7.1.3 [Инструменты] (#testing_instruments)<br/>
   7.1.4 [Риски] (#testing_risks)<br/>
   7.2 [Общая информация и запуск тестов](#testing_info)<br/>
   7.3 [Результат тестирования](#testing_results)<br/>
   7.4 [Исходный код тестов](#testing_src)<br/>
8. [Нефункциональные требования](#non-functional_requirements)<br/>
   8.1 [Атрибуты качества](#quality_attributes)<br/>
   8.1.1 [Требования к удобству использования](#requirements_for_ease_of_use)<br/>
   8.1.2 [Требования к безопасности](#security_requirements)<br/>
   8.2 [Внешние интерфейсы](#external_interfaces)<br/>
   8.3 [Ограничения](#restrictions)<br/>
9. [Запуск проекта](#starting)<br/>


<a name="intro"></a>

# 1 Описание приложения

Web-приложение "Список дел" предназначено для уменьшение нагрузки на память человека путём оставления заметок. 
Приложение создано для пользователей любой операционной системы так как работает в работает в браузере. Приложение позволит создавать, редактировать существующие и удалять неактуальные записи. 
Приложение будет написано на новейших технологиях веб разработки, используя популярные подходы разработки ПО.

<a name="project_components" />

# 2 Составляющие проекта

<a name="bd" />

## 2.1 База данных

Хранение данных будет реализовано в SQL таблицах, где будет информация о пользователях и их заметках.

<a name="backend" />

## 2.2 Backend

Серверная часть будет реализовывать главную логику приложения, работать с базой данных через SQL запросы. Язык написания: NodeJS

<a name="frontend" />

## 2.3 Frontend

Клиентская часть будет реализовывать функционал backend приложения посредством вызова API методов.
Язык написания: JavaScript фреймворк - React. Приложение может быть запущено в любом браузере на любой системе.

<a name="main_functional" />

# 3 Основной функционал проекта

Приложение To Do Web Manager включает в себя несколько основный функций:

- Аутентификация пользователя.
    - Вход в систему
    - Регистрация 
- Работа со своими заметками заметками
    - Добавление новой заметки
    - Удаление заметки
    - Редактирование заметки

Информация о пользователях и их задачах хранится в отдельных таблицах базы данных.

<a name="project_scheme" />

# 4 Схема взаимодействия компонентов проекта

![scheme](./documentation/flow.png)

<a name="graph_materials" />

# 5 Графический материал

## 5.1 Диаграммы

По ссылке ниже представлены 5 типо диаграмм:

- Диаграмма классов
- Диаграмма активностей
- Диаграмма последовательностей
- Диаграмма состояний
- Диаграмма компонентов

[Диаграммы](https://github.com/kharbacheuski/to-do-web-manager/tree/main/documentation/diagrams/README.md)

## 5.2 Скриншоты

По ссылке ниже размещены скриншоты основных элементов приложения

[Скриншоты](https://github.com/kharbacheuski/to-do-web-manager/tree/main/documentation/screenshots/README.md)

<a name="source_code" />

# 6 Исходный код проекта

Исходных код проекты включает в себя программы двух главных составляющих проекта: фронтенд и бэкэнд, а также дампы таблиц для MySQL базы данных

## 6.1 Frontend
[Frontend](https://github.com/kharbacheuski/to-do-web-manager/tree/main/project-code/client)

## 6.2 Backend
[Backend](https://github.com/kharbacheuski/to-do-web-manager/tree/main/project-code/server)

## 6.3 Data Base
[Data Base](https://github.com/kharbacheuski/to-do-web-manager/tree/main/project-code/data-base)

<a name="testing" />

# 7 Тестирование

<a name="testing_aspects" />

## 7.1 Основные аспекты	тестирования

<a name="testing_goals" />

### 7.1.1 Цели

Данное тестирование преследует цели правильности работы тестируемой функциональности,
Защита кода от стороннего изменения (при изменении только кода, без тестов), тесты не пройдут и будет обнаружена ошибка. Одной из главной целью тестирование является предотвращение попадания неправильной функциональности к конкретным пользователям (в прод).

Объекты тестирования:

1. Удаление задачи 
2. Аутентификация пользователя
3. Удаление пользователя

<a name="testing_vars" />

### 7.1.2 Виды

В рамках данного проекта была выбрана реализация интеграционных тестов. Тесты, которые тестирует не конкретный модуль или функцию, а совокупность взаимодействующих модулей, методов.

<a name="testing_instruments" />

### 7.1.3 Инструменты

Для реализации тестов, была выбрана библиотека Jest, направленная на тестирование приложений написанных на NodeJS и JavaScript.

<a name="testing_risks" />

### 7.1.4 Риски

При неправильной работе аутентификации в системе, пользователь может иметь доступ к задачам, назначенным другому пользователю. Изменять их, удалять и добавлять новые. Это риск для безопасности приложения, который при возникновении сводит на нет конфидентильность приложения.

При некорректной работе удаления пользователя, данные о человеке, которых захотел удалить свой аккаунт из системы, буду удалены не полностью или не удалены вообще. Это будет влияеть на стабильность и чистоту системы (базы данных), а также противоречит законодательству и политике конфидентиальности.

<a name="testing_info" />

## 7.2 Общая информация и запуск тестов

Для данного проекта были предусмотрены интеграционные тесты API вызовов. 
Тестирование было реализовано с использованием популярной библиотеки тестирования NodeJS приложений - Jest

Для того чтобы запустить тесты нужно
    - перейти в директорию ```project-code/server```
    - запустить из консоли команду ```npm run test```

Тесты покрывают функционал таких методов как: аутентификация пользователя, удаление пользователя, удаление задачи.

<a name="testing_results" />

## 7.3 Результат тестирования

[Результат тестирования](https://github.com/kharbacheuski/to-do-web-manager/tree/main/documentation/testing/README.md)

<a name="testing_src" />

## 7.4 Исходный код тестов

[Исходный код тестов](https://github.com/kharbacheuski/to-do-web-manager/tree/main/project-code/server/src/tests)

<a name="non-functional_requirements"/>

# 8 Нефункциональные требования

<a name="quality_attributes"/>

## 8.1 Атрибуты качества

<a name="requirements_for_ease_of_use"/>

### 8.1.1 Требования к удобству использования

1. Доступ к основным функциям веб-приложения не более чем за одну операцию;
2. Все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при
   выборе элемента;
3. Пошаговая инструкция использования основных функций приложения отображена в справке.

<a name="security_requirements"/>

### 8.1.2 Требования к безопасности

Веб-приложение предоставляет возможность просмотра и редактирования задач только авторизированному пользователю.
После авторизации пльзователю назначается JWT-токен.
Для корректной работы приложени все последующие запросы должны содержать этот токен.
Пароли пользователей хранятся в таблице в зашифрованном виде

<a name="external_interfaces"/>

## 8.2 Внешние интерфейсы

Окна веб-приложения удобны для использования пользователями с плохим зрением:

* функциональные элементы контрастны фону окна.
* минималистичный и понятный дизайн.
* простота использования с соблюдением UI/UX.

<a name="restrictions"/>

## 8.3 Ограничения

1. Клиентское приложение реализовано с использованием React JS;
2. Все записи хранятся в базе данных MySQL (можно настроить любую базу данных).
3. Серверная часть - NodeJS;

<a name="starting"/>

# 9 Запуск проекта

Для того чтобы полностью развернуть проект понадобится привести в рабочее состояние три слоя проекта в следующей последовательности:

- База данных
- Серверная часть
- Клиентская часть

0) Для начала нужно установить зависимости: Node (например v14.18.0), MySQL Server, MySQL Workbench - UI для взаимодействия с базами данных (опционально)

1) Для запуска базы данных, создайте SQL схему (структурный дамп лежит в директории ```project-code/data-base```) и запустите MySQL Server

2) Для запуска серверной части, нужно перейти в директорию ```project-code/server```
    - В файле db/connect.js должны быть валидные данные для подключения к базе данных
    - Из консоли выполнить команду ```npm run server -- <db_password>```, где db_password - пароль к базе данных

3) Для запуска клиента, нужно перейти в директорию ```project-code/client``` из консоли выполнить команду
    - ```npm run start``` для запуска в режиме разработки
    - ```npm run build``` для запуска в режиме деплоя
