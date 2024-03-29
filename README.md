# 3-course-komework

Необходимо реализовать карточную игру, смысл которой довольно прост: вам нужно выбрать все пары карт.
Функционал: выбор сложности, основную логику игры, вывод результата. Ниже вы найдёте подробное описание каждого пункта.
Есть три уровня сложности: **легкий, средний, сложный**. От уровня сложности зависит количество карточек, которые будут показаны пользователю на игровом экране.

Количество карточек для каждого уровня сложности:
    - Легкий уровень - 6 карточек (3 пары)
    - Средний уровень - 12 карточек (6 пар)
    - Сложный уровень - 18 карточек (9 пар)

Как только уровень сложности выбран, игроку показывается на игровой поле.

Вам предстоит написать логику генерации необходимого количества карточек. 

Карты обыкновенные игральные:

- 4 масти (черви, бубны, крести, пики)
- 9 рангов (6, 7, 8, 9, 10, Q, K, J, A)

Когда карточки будут сгенерированы, их нужно перетасовать и показать игроку на 5 секунд, после чего карточки перевернуть рубашками вверх.

- **Игровая механика**
    
    Когда пользователь кликает на карточку, она переворачивается и показывает ранг и масть. Необязательно делать анимацию перевода. 
    
    Когда игрок кликает на предположительную пару, то игра осуществляет сверку карточек:
    
    - Если карточки совпадают ⇒ игра продолжается
    - Если карточки не совпадают ⇒ игра заканчивается
    
    Если были найдены все пары, игрок побеждает.
    
- **Финал игры**
    
    Каким бы ни был финал игры, пользователю показывается всплывающее окно со:
    
    - Статусом (проиграл / выиграл).
    - Временем, затраченным на игру.
    - Кнопкой, предлагающей сыграть снова.
 
- **лобальное состояние**
    
    Следует программировать игру, ориентируясь на данный компонент системы. Это и будет нашим ядром и сердцем игры.
    
    Если говорить абстрактно, глобальное состояние позволяет нам понять, в каком статусе находится программа. На основании данного состояния, мы можем показывать тот или иной экран, или, к примеру, как-то отреагировать на изменение системы.
    
    В данной игре мы видим несколько элементов, которые можно хранить в глобальном состоянии:
    
    - Время, затраченное на игру.
    - Выбранный уровень сложности.
    - Статус игры (выбор сложности, игра, результат).
    - Сгенерированные карточки (опционально).
    - Выбранные карточки.
- **Реализация глобального состояния**
    
    Тут можно поступить разными способами, какой сочтете нужным. Вы можете реализовать глобальное состояние через:
    
    - Обычный объект javascript .
    - Набор переменных.
    - Поля объекта window.
    - localStorage.
    
    Сконцентрируйтесь не на реализации, а на сути. Запомните, глобальное состояние - сердце программы. Оно хранит всю необходимую информацию для работы игры.
