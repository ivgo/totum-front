/*!
* TOTUM LOCALIZATION
* */
App.langs = App.langs || {};
App.langs.ru =
    {
        "locale": "ru-RU",
        "dateFormat": 'DD.MM.YY',
        "dateTimeFormat": 'DD.MM.YY HH:mm',
        "timeDateFormatNoYear": 'HH:mm DD.MM',
        "localeDatetimepicker": "ru",
        "letter_replaces": {"ё": "e"},
        "search_prepare_function": function (string1, string2) {
            Object.keys(this.letter_replaces).forEach((_) => {
                string1 = string1.toLowerCase().replace(_, this.letter_replaces[_]);
                if (string2) {
                    string2 = string2.toLowerCase().replace(_, this.letter_replaces[_]);
                }
            })
            return [string1, string2];
        },
        modelMethods: {
            'edit': 'Изменение',
            'checkInsertRow': 'Предварительное добавление',
            'duplicate': 'Дублирование',
            'refresh_rows': 'Пересчет строк',
            'loadPage': 'Загрузка страницы',

            'getTableData': 'Загрузка информации о таблице',
            'refresh': 'Обновление данных таблицы',
            'checkEditRow': 'Предварительный расчет панели',
            'saveEditRow': 'Сохранение панели',
            'save': 'Изменение поля',
            'click': 'Нажатие кнопки',
            'selectSourceTableAction': 'Вызов панели',
            'add': 'Добавление строки',
            'getEditSelect': 'Загрузка селекта',
            'delete': 'Удаление'
        },
        "translates":
            {
                'Creator-tableEditButtons-default_action': 'Действ.',
                'Creator-tableEditButtons-on_duplicate': 'Дублир.',
                'Creator-tableEditButtons-row_format': 'Строка',
                'Creator-tableEditButtons-table_format': 'Таблица',

                'Load context data': 'Загрузить дополнительную информацию',
                'Close context data': '<b>Закрыть</b> дополнительную информацию',
                'Open context data': '<b>Открыть</b> дополнительную информацию',
                'Element preview is empty': 'Превью элемента пусто',
                "PATH-TO-DOCUMENTATION": "http://docs.totum.online/",
                "Email for cron notifications": "Email для нотификаций крона",
                "Password": "Пароль",
                "Login": "Логин",
                "Create a user with full access": "Создать пользователя с полным доступом",
                "PostgreSql console utilities": "Консольные утилиты PostgreSql",
                "With console utilities": "С консольными утилитами",
                "Without console utilities": "Без консольных утилит",
                "Database name": "Имя базы",
                "Database host": "Host базы",
                "Setup string": "Строка установки",
                "Row <b>id %s %s</b> is blocked": "Строка <b>id %s %s</b> заблокирована",
                "Database PostgreSQL": "База данных PostgreSQL",
                "Deploy only in the new": "Разворачивать только в новой",
                "Use the existing": "Использовать существующую",
                "Schema": "Схема",
                "Single installation": "Одинарная установка",
                "Multiple installation": "Множественная установка",
                'The value is not found': 'Значение не найдено',

                "Edit totumCode in %s": "Редактировать Тотум-код в %s",
                "Edit totumCode in value of %s": "Редактировать Тотум-код в ячейке %s",

                "Cancel": "Отмена",
                "Add": "Добавить",
                "Add a branch": "Добавить ветку",
                "Add a row": "Добавить строку",
                "Save": "Cохранить",
                "Load": "Загрузить",
                "Open": "Открыть",
                "Open all": "Открыть все",
                "Close": "Закрыть",
                "Close all": "Закрыть все",
                "Close the panel": "Закрыть панель",
                'Apply': 'Применить',
                'By default': 'По умолчанию',
                'Show all': 'Показать все',
                "Disable code": "Отключить код",
                "Code disabling": "Отключение кода",
                "Disable": "Отключить",
                "Refresh": "Обновить",
                "Tab": "Вкладка",
                'Create a set': 'Создать набор',
                'Hide admin. fields': 'Скрыть адм.поля',
                'Save the fields set': 'Сохранить набор полей',
                'Set title': 'Название набора',

                "Upload limit exceeded": "Превышен лимит файлов для закачки",
                "In a new tab": "В новой вкладке",
                "Expand All": "Развернуть все",
                "Scheme of calculation": "Схема расчета",
                "Select user": "Выберите пользователя",
                "Select values": "Выберите значения",
                "Select": "Выберите",
                "Loading": "Загрузка",
                '%s elements': '%s элементов',
                '%s el.': '%s эл.',
                'Change warning': 'Предупреждение при изменении',

                'Default sets': 'Наборы по умолчанию',
                'Sets': 'Наборы',
                'Save as default set': 'Сохранить как набор по умолчанию',


                'Apply to selected': 'Применить к выделенным',
                'Fix the selected': 'Фиксировать выделенные',
                'Reset manuals': 'Сбросить ручные',
                'Reset manual': 'Сбросить ручное',


                'Change in source table': 'Изменить в таблице-источнике',
                'Add to source table': 'Добавить в таблицу-источник',

                'Viewing table settings': 'Просмотр настроек таблицы',
                'Editing table settings': 'Редактирование настроек таблицы',

                'Viewing table field': 'Просмотр поля таблицы',
                'Editing table field': 'Редактирование поля таблицы',

                'Viewing <b>%s</b> from table <b>%s</b>': 'Просмотр <b>%s</b> таблицы <b>%s</b>',
                'Editing <b>%s</b> from table <b>%s</b>': 'Редактирование <b>%s</b> таблицы <b>%s</b>',

                'Adding table': 'Добавление таблицы',
                'Adding field': 'Добавление поля',
                'Adding row to table': 'Добавление строки в таблицу',
                'Error in %s field': 'Ошибка в поле %s',
                'Done': 'Выполнено',

                'Comments of field': 'Комментарии поля',
                'Editing in the form': 'Редактирование в форме',
                'Add comment': 'Добавить комментарий',

                'Manually': 'Вручную',
                'Action not executed': 'Действие не выполнено',

                'Manually changing the json field': 'Ручное изменение json-поля',
                'JSON format error': 'Ошибка формата JSON',
                'Fill in by the default settings': 'Заполнить настройками по умолчанию',

                'Edit list/json': 'Редактировать список/json',
                'Order': 'Порядок',

                'Format': 'Форматировать',
                'FormatShort': 'Формат',
                'Copy': 'Копировать',

                'Field <b>%s</b> text': 'Текст поля <b>%s</b>',

                'Field settings': 'Настройки поля',
                'Edit text': 'Редактировать текст',
                'Edit': 'Редактировать',
                'View': 'Просмотреть',

                'Adding to the table is forbidden': 'Добавление в таблицу запрещено',

                'The field must be entered': 'Поле должно быть заполнено',
                'The field %s must be entered': 'Поле %s должно быть заполнено',
                'Value fails regexp validation: "%s"': 'Значение не проходит валидацию regex: "%s"',

                'Change the password': 'Поменять пароль',
                'New password': 'Новый пароль',
                'Selected': 'Выбранное',
                'The data is incomplete. Use the search!': 'Данные не полны. Воспользуйтесь поиском!',

                'Filled "%s" field  error: %s': 'Ошибка заполнения поля "%s": %s',
                'Failed to load data': 'Не удалось загрузить данные',
                'Required to save the item for file binding': 'Требуется сохранение элемента для привязки файла',
                'Adding file': 'Добавить файл',
                'Adding fils': 'Добавить файлы',
                'Drag and drop the file here': 'Перетащите сюда файл',

                'There must be a number': 'Здесь должно быть число',

                'ApplyShort': 'Прим.',
                'InvertShort': 'Инверт.',
                'CancelShort': 'Отмен.',

                'Field structure error': 'Ошибка структуры поля',
                'Field %s structure error': 'Ошибка структуры поля %s',
                'Field <b>%s</b> parameters': 'Параметры поля <b>%s</b>',
                'Editor': "Редактор",


                'ERR!': 'ОШБК!',
                'Error': 'Ошибка',
                'The field accepts only one file': 'Поле принимает только один файл',

                'Checking the file with the server': 'Проверка файла сервером',

                'Empty': 'Пустое',
                'Files form <b>%s</b>': 'Форма файлов <b>%s</b>',
                'Edit field': 'Редактировать поле',
                'The JSON field content': 'Содержимое JSON-поля',
                'Choose the field': 'Выбрать поле',


                "Remove from the filter": "Удалить из фильтра",
                "Add to the filter": "Добавить в фильтр",

                "Simple": 'Простая',
                "Calculated in the cycle": 'Расчетная в цикле',
                "Calculated": 'Расчетная',
                "Temporary": 'Временная',
                "Cycles": 'Циклы',

                'Code': 'Код',
                'Action code': 'Код действия',
                'ActionShort': 'Действ',
                'SelectShort': 'Селект',
                'Formating': 'Форматирование',
                'Selects': 'Селекты',
                'Select': 'Селект',
                'Fields calculation time': 'Время расчета полей',

                "Send password to email": 'Отправить пароль на email',
                'New password': 'Новый пароль',
                'Register and send password to email': 'Зарегистрировать и отправить пароль на email',
                'Registration': 'Регистрация',
                'Service is optimized for browsers Chrome, Safari, Yandex, FireFox latest versions': 'Сервис оптимизирован под броузеры Chrome, Safari, Yandex, FireFox последних версий',
                'I still want to see it': 'Все равно хочу посмотреть',
                'Apply and close': 'Применить и закрыть',
                'Shelve all': 'Отложить все',
                'Shelve': 'Отложить',
                '__clock_shelve_panel': '<span class="clocks-na">На</span> <input type="number" step="1" value="10" class="form-control"/> <select class="form-control"><option  selected value="1">минут</option><option value="2">часов</option><option value="3">дней</option></select>',
                'Calculated value': 'Расчетное значение',
                'Same as calculated': 'Cовпадает с расчетным',
                'Show logs': 'Показать логи',
                'Log': 'Лог',
                'Calculate log': 'Лог расчета',
                'Log of field manual changes': 'Лог ручных изменений по полю',
                'Log is empty': 'Лог пуст. Включите логирование и перегрузите страницу',
                'Operation execution error': 'Ошибка выполнения операции',
                'No server connection': 'Нет соединения с сервером',
                'export': 'экспорт',
                'import': 'импорт',
                'Full': 'Полный',
                'Only rows': 'Только строки',
                'Copied': 'Скопировано',
                'Edit table settings': 'Редактировать настройки таблицы',
                'Open Tables': 'Открыть Cписок Таблиц',
                'Open Tables Fields': 'Открыть Состав Таблиц',
                'Creating tables versions': 'Создание версий таблиц',
                'Changing versions of cycle tables': 'Изменение версий таблиц цикла',
                'Restore': 'Восстановить',
                'Restoring': 'Восстановление',
                'Editing': 'Изменение',
                'Normal mode': 'Норм режим',
                ' / Version %s / Cycle %s': ' / Версия %s / Цикл %s',
                'Add field': 'Добавить поле',
                '%s from %s': '%s из %s',
                'Reset': 'Сбросить',
                'Comment of the table rows part': 'Комментарий строчной части таблицы',
                'Read only': 'Только чтение',
                'Filters': 'Фильтры',
                'Parameters': 'Параметры',
                'Rows part': 'Строчная часть',
                'with id': 'с id',
                'Column footers': 'Футеры колонок',
                'Out of column footers': 'Футеры вне колонок',

                'Logout': 'Выход',
                'Print': 'Печать',
                ' from ': ' из ',
                'Header': 'Хэдер',
                'Columns': 'Колонки',
                'Footer': 'Футер',

                'Hidden by default': 'Скрыто по умолчанию',
                'Fields visibility': 'Видимость полей',

                'On adding': 'При добавлении',
                'On changing': 'При изменении',
                'On deleting': 'При удалении',
                'On click': 'При клике',
                'Editing': 'Редактирование',
                'Adding and editing is disallowed': 'Добавление и редактирование запрещено',
                'Adding is disallowed': 'Добавление запрещено',
                'Editing is disallowed': 'Редактирование запрещено',
                'Field %s': 'Поле %s',
                'Change': 'Изменить',
                'Duplicate': 'Дублировать',
                'Insert after': 'Вставить после',
                'Section': 'Секция',
                'Change NAME': 'Изменить NAME',
                'Delete': 'Удалить',
                'Deleting': 'Удаление',
                'Hide': 'Скрыть',
                'Hiding': 'Скрытие',

                'Open the panel': 'Открыть панель',
                'Recalculate': 'Пересчитать',
                'Recalculate cycle': 'Пересчитать цикл',

                'Show': 'Показать',
                'Field width': 'Ширина поля',
                'Pin': 'Закрепить',
                'Unpin': 'Открепить',
                'Sort A-Z': 'Сортировать А-Я',
                'Sort Z-A': 'Сортировать Я-А',
                'Select': 'Выделить',
                'Table is empty': 'Таблица пуста',
                'Text field editing': 'Правка текстового поля',
                'Documentaion': 'Документация',

                'Delete field %s from table %s?': 'Удалить поле %s из таблицы %s?',
                'Deleting field %s from table %s?': 'Удаление поле %s из таблицы %s?',


                'Fill in the values for unique fields': 'Заполните значения для уникальных полей',

                'Operation': 'Операция',
                'Value': 'Значение',
                'Math operations': 'Математические операции',
                'Summ': 'Сумма',
                'Number of numbers': 'Кол-во чисел',
                'Average': 'Среднее',
                'Max': 'Максимальное',
                'Min': 'Минимальное',
                'Non-numeric elements': 'Нечисл. элементов',
                'Calculated only by visible rows': 'Посчитано только по видимым строкам',
                'By current page': 'По текущей странице',

                'Wait, the table is loading': 'Подождите, таблица загружается',
                'Add row': 'Добавить строку',
                'Field % not found': 'Поле %s не найдено',
                'Section deleting': "Удаление секции",
                'Section editing': "Редактирование секции",


                'empty list': 'Пустой лист',
                'date': 'дата',
                'date-time': 'дата-время',
                'date-time with secongs': 'дата-время с секундами',
                'user id': 'id пользователя',
                'user roles ids': 'ids ролей пользователя',
                'table id': 'id таблицы',
                'table NAME': 'NAME таблицы',
                'temporary table HASH': 'HASH врем. таблицы',
                'adding row HASH': 'HASH строки добавления',
                'calcuated table cycle id': 'cycle id расчетной таблицы',
                'field NAME': 'NAME поля',
                'new line': 'новая строка',
                'tab': 'Ттабуляция',
                'action code action type': 'тип экшена кода действия',
                'the ids of the checked fields': 'id отмеченных галочками полей',
                'current field value (for selections/actions/formats)': 'значение текущего поля (для селектов/действий/форматов)',
                'past value of the current field': 'прошлое значение текущего поля',
                'current host-name': 'текущий хост-name',
                'duplicated row id': 'ид дублированной строки',
                'Csv-loading question': 'Вопрос про csv-загрузку',
                'Check matching the structure of the loaded file to the sequence of fields': 'Проверьте соответствие структуры загружаемого файла последовательности полей',
                'Running': 'Выполняется',
                'Deleted': 'Удалено',
                'Blocked': 'Заблокировано',
                'Surely to change?': 'Точно изменить?',
                'Surely to recalculate %s rows?': 'Точно пересчитать %s строк?',
                'Surely to duplicate %s rows?': 'Точно дублировать %s строк?',
                'Surely to recalculate %s cycles?': 'Точно пересчитать %s циклов?',
                'Surely to hide %s rows?': 'Точно скрыть %s строк?',
                'Surely to delete %s rows?': 'Точно удалить %s строк?',
                'Surely to hide the row?': 'Точно скрыть строку?',
                'Surely to delete the row?': 'Точно удалить строку?',

                'Surely to restore the row %s?': 'Точно восстановить строку %s?',
                'Surely to restore %s rows?': 'Точно восстановить %s строк?',

                'Hiding %s rows': 'Скрытие %s строк',
                'Deleting %s rows': 'Удаление %s строк',
                'Hiding the row %s': 'Скрытие строки %s',
                'Deleting the row %s': 'Удаление строки %s',

                'Recalculating': 'Пересчет',
                'Duplicating': 'Дублирование',
                'Confirmation': 'Подтверждение',


                'All': 'Все',
                'Without hand': 'Без руки',
                'With hand all': 'С рукой все',
                'With hand equals calc': 'С рукой как в расчете',
                'With hand different': 'С рукой отличающиеся',
                'Filtering by current page': 'Фильтрация по текущей странице',
                'No rows are selected by the filtering conditions': 'По условиям фильтрации не выбрана ни одна строка',
                'To operate the order field, reload the table': 'Для работы поля порядок перезагрузите таблицу',
                'Rows restore mode. Sorting disabled': 'Режим восстановления строк. Сортировка отключена',
                'It is possible to sort only within a category': 'Возможно сортировать только в пределах категории',
                'You cannot move the row %s': 'Нельзя перемещать строку %s',
                'The unchecked row should be selected as the anchor for the move': 'В качестве якоря для перемещения нужно выбрать не отмеченную строку',
                'No data': 'Нет данных',
                'Only nested rows can be moved': 'Перемещать можно только вложенные строки',
                'You can only move within one branch': 'Перемещать можно только в пределах одной ветки',
                'Attention, please - this is a temporary table': 'Будьте внимательны - это временная таблица',
                'The table was changed by the user <b>%s</b> at <b>%s</b>': 'Таблица была изменена пользователем <b>%s</b> в <b>%s</b>',
                'treeAddTable': 'Таблицу',
                'treeAddFolder': 'Папку/Ссылку',
                'Tree search': 'Поиск по дереву',
                    'isCreatorSelector-NotCreatorView':'Отключить админ-лэер',
                    'isCreatorSelector-CommonView':'Отключить спецвид',
            }
    }
;