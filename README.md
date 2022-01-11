# Marvel Universe App
## React-приложение с использованием Marvel API
- Marvel API - загрузка с сервера персонажей и комиксов, только имеющих изображение-обложку
- Баннеры - баннер с рандомным персонажем: подгружается при первой загрузке страницы, можно обновлять самостоятеьно по кнопке, рекламный баннер: просто разметка
- Список персонажей и список самых актуальных комиксов, с кнопкой дозагрузки 
- При клике на комикс осуществляется переход на его отдельную страницу по id
- При клике на персонаж на главной странице можно получить краткое описание справа, либо найти другого с помощью формы, перейти на его страницу
- Форма поиска персонажа при помощи formik и валидация с помощью yup
- SEO-заголовки и описание для каждой страницы при помощи react-helmet-async
- lazy-loading и Routes=>Route по id для каждой страницы
- Спиннер при загрузке информации с сервера, сообщение об ошибке в случае неудачи, либо загрузка контента
- Каждый компонент, получающий информацию с сервера обернут в компонент ErrorBoundary, чтобы не ломалось все приложение при получении ошибки
- Единая страница-компонент для дальнейшей отрисовки страницы персонажа и комикса, отрисовка с сервера по ID, по отдельным шаблонам страниц
- Загрузка обрабатывается в:  
	* services/MarvelService.js - загрузка с сервера Marvel API всех персонажей/комиксов, одиночного персанажа/комикса по id, трансформация ответа с сервера в единый вид, получение только необходимых полей для приложения;  
	* hooks/http.hook.js - общие loading, error, process;  
	* utils/setContent.js - частный случай отрисовки компонентов при процессах waiting, loading, confirmed, error  
- Компонентный подход с вынесением отдельно App, Pages, Components, hooks, services, utils
- Стили в Scss, для каждого компонента, общие в index.scss и в variables.scss, для расположения компонентов в приложении - в App.scss, адаптация для экранов в rem, vw, vh, %, незначительные для масштабирования в px
- Посмотреть наглядно: https://marin-mar.github.io/marvel-universe_app/

---
## React-App with Marvel API
- Marvel API - loading from server characters and comics only with thumbnails
- Banners - first banner with a random character: loaded when the page is loaded for the first time, can be updated by clicking the button; second banner: advertising, just markup
- List of characters and List of the most current comics, with additional loading button
- By clicking on a comic, the transition is underway to its separate page by id
- By clicking on a character on the main page, a brief description appears on the right, or find another one using the form, the transition is underway to its separate page by id
- Search form for a character is done with Formik and validation with Yup
- SEO-titles and descriptions done for each page with React-Helmet-Async
- Lazy-loading and Routes=>Route by id done for each page
- Spinner on loading information from server, ErrorMessage in case of failure and loading content
- Each Component with the receiving information from the server is wrapped in ErrorBoundary-component so that the entire application does not break when an error is received
- SinglePage-component for further rendering of the character and comic book pages, rendering from the server by ID, by separate page templates
- The upload is processed in:  
	* services/MarvelService.js - loading information about all characters/comics, single character/comic by name/id from the server with Marvel API, transformation of the response from the server into a view, obtaining only the necessary fields for the application;  
	* hooks/http.hook.js - common loading, error, process;  
	* utils/setContent.js - special case of rendering components in processes with waiting, loading, confirmed, error  
- Component approach with the taking out separately App, Pages, Components, hooks, services, utils
- Styles in Scss, for each component, common in index.scss and in variables.scss, for the location of components in the application - in App.scss, adaptation for screens in rem, vw, vh, %, insignificant for scaling in px
- Demonstration on: https://marin-mar.github.io/marvel-universe_app/