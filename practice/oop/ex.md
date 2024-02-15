**Task One**

1. Класс Phone.

-   Создайте класс Phone, который содержит переменные number, model и
    weight.
-   Создайте три экземпляра этого класса.
-   Выведите на консоль значения их переменных.
-   Добавить в класс Phone методы: receiveCall, имеет один параметр – имя
    звонящего. Выводит на консоль сообщение “Звонит {name}”.
-   getNumber – возвращает номер телефона. Вызвать эти методы для каждого из
    объектов.
-   Добавить конструктор в класс Phone, который принимает на вход три
    параметра для инициализации переменных класса - number, model и
    weight.
-   Добавить конструктор, который принимает на вход два параметра для
    инициализации переменных класса - number, model.
-   Добавить конструктор без параметров.
-   Вызвать из конструктора с тремя параметрами конструктор с двумя.
-   Добавьте перегруженный метод receiveCall, который принимает два
    параметра - имя звонящего и номер телефона звонящего. Вызвать этот
    метод.
-   Создать метод sendMessage с аргументами переменной длины. Данный
    метод принимает на вход номера телефонов, которым будет отправлено
    сообщение. Метод выводит на консоль номера этих телефонов.

**Task Two**
Создать программу для имитации работы клиники.

-   Пусть в клинике будет три врача: хирург, терапевт и дантист.
-   Каждый врач имеет метод «лечить», но каждый врач лечит по-своему.
-   Так же предусмотреть класс «Пациент» и класс «План лечения».
-   Создать объект класса «Пациент» и добавить пациенту план лечения.
-   ак же создать метод, который будет назначать врача пациенту согласно
    плану лечения.
    a) Если план лечения имеет код 1 – назначить хирурга и выполнить метод
    лечить.
    b) Если план лечения имеет код 2 – назначить дантиста и выполнить метод
    лечить.
    c) Если план лечения имеет любой другой код – назначить терапевта и
    выполнить метод лечить.

**Task Three**
Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

**Task Four**
Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

**Task Five**
Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
