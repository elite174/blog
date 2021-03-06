---
title: Мета директивы
folder: browser
slug: meta
date: 09.09.20
---
# Мета-директивы

Следующие директивы поддерживаются не всеми браузерами.

## Preload

Директива **Preload** позволяет предварительно загрузить ресурсы (CSS, JS, ...) для текущей навигации с высоким приоритетом.

```
<link rel="preload" href="/script.js" as=["script", "style", "image", "document"...]>
```

**Замечание:** при предварительной загрузке связей с разрешенными CORS-ресурсами необходим атрибут *crossorigin*.

## Prefetch

Директива **Prefetch** позволяет браузеру загружать ресурсы с низким приоритетом в фоновом режиме для дальнейшего исполоьзования и сохранять их в кэше.

Существует три типа prefetch:

### **Ссылочный prefetch**
Cсылочный prefetch позволяет браузеру выбрать ресурсы и сохранить их в кэше, предполагая, что *потом* пользователь их запросит.

```
<link rel="prefetch" href="/pic.jpg">
```

> Эта техника ускорит многие интерактивные сайты, но не будет работать всегда и везде по следующим причинам:

> 1. Для некоторых сайтов трудно угадать, что пользователь собирается делать.
> 2. Для других сайтов сохраненные в кэше данные устаревают, если пользователь быстро выбирает новые.
> 3. Опасно постоянно сохранять файлы в кэше — просмотр текущей страницы замедлится».

> *Google Developers*

### **DNS-prefetch**

DNS prefetch позволяет браузеру выполнять поиск DNS на странице в фоновом режиме, в то время как пользователь просматривает сайт. Это минимизирует время ожидания, поскольку поиск DNS уже состоялся, когда пользователь щелкнет по ссылке.

```
<link rel="dns-prefetch" href="//fonts.googleapis.com">
```

### **Prerender**

Prerender принимает в фоновом режиме **всю страницу**, все содержание документа.

```
<link rel="prerender" href="https://www.keycdn.com">
```

> Подсказка prerender используется приложением для указания следующей вероятной цели HTML-навигации. При этом пользовательский > агент выберет и обработает указанный ресурс как HTML-ответ. А вот для того, чтобы выбрать другой тип контента, или же когда > предварительная обработка HTML нежелательна, приложение использует другую подсказку — prefetch.

> *W3C*

## Preconnect

Preconnect позволяет браузеру **установить соединение прежде, чем HTTP-запрос будет отправлен на сервер**. Эта процедура включает поиски DNS, «переговоры» TLS и «рукопожатие» TCP. Что в свою очередь устраняет круговые задержки и экономит время пользователя.

```
<link href="https://cdn.domain.com" rel="preconnect" crossorigin>
```

> Preconnect — важный инструмент оптимизации… он устраняет дорогостоящие круговые задержки из пути запроса. Иногда время ожидания запроса сокращается на сотни и даже тысячи миллисекунд.

> Илья Григорик (англ. Ilya Grigorik)
