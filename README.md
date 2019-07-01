# Серия вебинаров по react.js

## Урок 1. Webpack and environment

[Ссылка на видео](https://www.youtube.com/watch?v=33k73EVMtHM)

### Полезные ссылки

* [Webpack tale](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1?gi=bebc7448320b)
* [React tutorial](https://reactjs.org/tutorial/tutorial.html)

## Урок 2. React introduction

[Ссылка на видео](https://www.youtube.com/watch?v=-1N4C94BIZQ)

### Полезные ссылки

* [Useful scss media query mixins](https://glennmccomb.com/articles/useful-sass-scss-media-query-mixins-for-bootstrap/)
* [Approaches for media queries creation](https://css-tricks.com/approaches-media-queries-sass/)
* [Breakpoints and media queries in SCSS](https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2)
* [Сервис для сжатия картинок](https://squoosh.app/)

### Домашнее задание

[Здесь](https://github.com/ubcent/react-01.06/tree/master/misc) можно найти исходник сверстанного макета

* Доделать компонент `ImageBox`
  * 😌 Вынести лайки и комменты в отдельные компоненты
  * 😎 Подключить и использовать `prop-types`
* 😌 Сделать компонент `Gallery`
* 😎 Сделать сет компонентов для отображения профиля
* 😱 Навести порядок в стилях: сделать миксины для @support и @media, изолировать стили скоупингом (вложенность)

😌 - легко, 😎 - посложнее, 😱 - сложно или объемно

## Урок 3. Lifecycle and hooks

* [Ссылка на видео](https://www.youtube.com/watch?v=tsvXhnQdga0)
* [Инструкция по запуску серверной части](https://github.com/ubcent/react-01.06/blob/master/docs/SERVER_RUN.md)
* [Описание методов API](https://github.com/ubcent/react-01.06/blob/master/docs/API_DESCRIPTION.md)

### Полезные ссылки

* [Состояние компонента в реакте](https://learn-reactjs.ru/faq/component-state)
* [Хуки в реакте](https://ru.reactjs.org/docs/hooks-intro.html)
* [React lifecycle](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0)

### Домашнее задание 

* 😌 Сделать красивую форму авторизации
* 😎 Сделать `endless scroll` для списка картинок. Описание работы паджинации описана в [документации по API](https://github.com/ubcent/react-01.06/blob/master/docs/API_DESCRIPTION.md). Если задача покажется сложной, можно упростить, заменив механизм загрузки со скроллинга на нажатие кнопку "Загрузить еще".
* 😱 Реализовать универсальный компонент для бесконечного скроллинга, используя механизм хуков (в т.ч. кастомных).

😌 - легко, 😎 - посложнее, 😱 - сложно или объемно

## Урок 4. Portals and HoC pattern

* [Ссылка на видео](https://www.youtube.com/watch?v=GHugtA8fKo4)
* [Bonus video](https://www.youtube.com/watch?v=SchGvQYYKGc)

### Полезные ссылки

* [React Portals](https://reactjs.org/docs/portals.html)
* [Паттерны HoC и Render Props](https://medium.com/nuances-of-programming/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-react-render-props-%D0%B8-hoc-263f498ac841)

### Домашнее задание

На этот раз задание всего лишь одно и оно простое. Необходимо сделать, чтобы при нажатии на определенную картинку в списке она открывалась в модальном окне. API-метод `/api/photos` возвращает всю необходимую информацию, включая информацию о пользователях. Подробности в [документации по API](https://github.com/ubcent/react-01.06/blob/master/docs/API_DESCRIPTION.md).

## Урок 5. Routing

[Ссылка на видео](https://youtu.be/8vIPqBScJbE)

### Полезные ссылки

* [withRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md)
* [Вложенные роуты](https://tylermcginnis.com/react-router-nested-routes/)
* [Краткая документация](https://maxfarseer.gitbooks.io/react-router-course-ru/content/sozdaem_primitivnii_router.html)

### Домашнее задание

Продолжить начатое на уроке. Сделать красивое отображение фотографии в модальном окне.