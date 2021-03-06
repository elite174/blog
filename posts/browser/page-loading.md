---
title: Загрузка страницы
folder: browser
slug: page-loading
date: 09.09.20
---
# Загрузка страницы
## Этапы загрузки страницы
Когда пользователь вводит адрес сайта в браузер, происходит следующее:

1. Сначала браузер смотрит в свой локальный кэш DNS. Если там нет нужной записи, то браузер передаёт управление ОС, которая смотрит в свой кэш DNS. Если же нигде нет записи, то браузер обращается к DNS-серверу, чтобы получить реальный IP адрес этого сервера. Этот процесс называется **DNS lookup**.
2. Далее браузер, используя полученный IP, обращается к серверу с просьбой отправить копию сайта для клиета. Посылается запрос на 80 порт в случае HTTP и 443 в случае HTTPS. Это обращение и все последующие происходят по TCP/IP.
3. Если запрос клиента корректен, то бразуер отправлят ответ 200 OK, а затем начинает передавать данные в виде пакетов.
4. Далее в браузере происходит [рендер страницы](#рендер-страницы).

#  Рендер страницы
## Этапы рендера страницы

1. Формирование **DOM** из полученного HTML документа. Объект доступен в переменной document.
2. Загрузка стилей CSS и формирование **CSSDOM**. Стили доступны в document.styleSheets.
3. Используя DOM и CSSDOM браузер выстраивает **render tree** (набор объектов рендеринга). Render tree дублирует структуру DOM, но с некоторыми отличиями:
	- В него не попадают невидимые элементы (например, head или элементы с display: none)
	- Каждая строка текста представлена в виде отдельного renderer
	
	Каждый объект renderer содержит в себе соответствующий объект DOM (или текст), а также рассчитанные стили. 
4. Для каждого объекта в render tree происходит рассчёт положения на странице (**layout**). Браузеры используют поточный метод *flow*, с помощью которого в большинстве случаев достаточно одного прохода по дереву для определения положения (для таблиц, обычно, нужно больше проходов).
5. Затем идёт отрисовка или **painting** (вычисление цвета каждого пикселя).
6. Завершающий этап - **composite**. Компоненты рисуются слой за слоем.

В процессе взаимодействия пользователя со страницей (например, при изменении стилей или js-манипуляциях), некоторые этапы приходится запускать заново:

1. В случаях, когда положение элемента на странице не меняется (например, изменяются такие css-стили как: border-color, visibility, background-color...) выполняется **repaint** (т. е. браузер отрисует его заново без пересчёта позиции и прочего).
2. Когда же происходит изменение структуры документа, положение элементов, то происходит **reflow**.

### Оптимизации рендера

1. **Локализация изменений**

Браузеры локализуют **repaint** и **reflow** в пределах изменённых элементов. Например, при изменении абсолютно или фиксировано спозиционированного элемента браузер затронет только элемент и его потомков, а при изменении статично спозиционированного элемента - весь документ.

2. **Кэширование изменений**

Браузер старается кэшировать изменения, которые происходят в js-коде, и применять их в один проход после завершения исполнения блока кода.

```
var $body = $('body');
$body.css('padding', '1px'); // reflow, repaint
$body.css('color', 'red'); // repaint
$body.css('margin', '2px'); // reflow, repaint
// На самом деле произойдет только 1 reflow и repaint
```

Однако, как описано выше, обращение к свойствам элементов вызовет принудительный reflow. То есть, если мы в приведённый блок кода добавим обращение к свойству элемента, это вызовет лишний reflow:

```
var $body = $('body');
$body.css('padding', '1px');
$body.css('padding'); // обращение к свойству, принудительный reflow
$body.css('color', 'red');
$body.css('margin', '2px');
```

### Особенности рендера

#### Исполнение JS-кода
Браузер старается загружать ресуры (картинки, скрипты...) параллельно, но он не может загружать более 6 ресурсов сразу с одного домена.

Когда браузер доходит до обработки скрипта, то в дело вступает JavaScript interpreter, который преобразует байты в исполняемый код:
1) Байты
2) Символы
3) Токены
4) Abstract syntax tree (AST)

После этого компилятор оптимизирует *AST*, выполняет кэширование некоторых участков, компилирует код на лету в исполяемый (**JIT-compilation** или Just-in-time) и исполняет его.

#### Особенности **composite**
Элементы, которые содержат в стилях *opacity*, *transform* и *will-change*, выносятся в отдельный слой, а их обработка отдаётся GPU.