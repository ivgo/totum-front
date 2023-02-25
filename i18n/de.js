/*!
* TOTUM LOCALIZATION
* */
App.langs = App.langs || {};
App.langs.de =
    {
        "locale": "de-DE",
        "dateFormat": 'DD.MM.YY',
        "dateTimeFormat": 'DD.MM.YY HH:mm',
        "timeDateFormatNoYear": 'HH:mm DD.MM',
        "localeDatetimepicker": "de",
        "letter_replaces": {"ß": "ss"},
        "search_prepare_function": function (string1, string2) {
            Object.keys(this.letter_replaces).forEach((_) => {
                string1 = string1.toLowerCase().replace(_, this.letter_replaces[_]);
                if (string2) {
                    string2 = string2.toLowerCase().replace(_, this.letter_replaces[_]);
                }
            })
            return [string1, string2];
        },
        filtersExtenders: App.commonFiltersExtenders,
        css: {
            table: '.pcTable-container .loading-row td {background: url("/imgs/loading_ru.png") repeat #fff;}'
        },
        modelMethods: {
            'edit': 'Ändern',

            'checkInsertRow': 'Vorläufige Hinzufügung',
            'duplicate': 'Duplizieren',
            'refresh_rows': 'Neuberechnung von Zeilen',
            'loadPage': 'Seite wird geladen',

            'getTableData': 'Laden der Tabelleninformationen',
            'refresh': 'Aktualisierung der Tabellendaten',
            'checkEditRow': 'Vorläufige Berechnung des Panels',
            'saveEditRow': 'Speichern des Panels',
            'save': 'Ändern des Feld',
            'click': 'Betätigen der Taste',
            'selectSourceTableAction': 'Aufruf des Panels',
            'add': 'Hinzufügen einer Zeile',
            'getEditSelect': 'Laden der Selektion',
            'delete': 'Löschen'
        },
        "translates":
            {
                'Creator-tableEditButtons-default_action': 'Aktion',
                'Creator-tableEditButtons-on_duplicate': 'Duplier.',
                'Creator-tableEditButtons-row_format': 'Zeile',
                'Creator-tableEditButtons-table_format': 'Tabelle',

                'Load context data': 'Weitere Informationen herunterladen',
                'Close context data': '<b>Schließen</b> weitere Informationen',
                'Open context data': '<b>Öffnen</b> weitere Informationen',
                'Element preview is empty': 'Vorschauelement leer',
                "PATH-TO-DOCUMENTATION": "https://ru.docs.totum.online/",
                "Email for cron notifications": "E-Mail für Cron-Benachrichtigungen",
                "Password": "Kennwort",
                "Login": "Login",
                "Create a user with full access": "Erstellen eines Benutzers mit Vollzugriff",
                "PostgreSql console utilities": "PostgreSql-Konsolen-Dienstprogramme",
                "With console utilities": "Mit Konsolen-Dienstprogrammen",
                "Without console utilities": "Ohne Konsolendienstprogramme",
                "Database name": "Datenbank-Name",
                "Database host": "Datenbank-Host",
                "Setup string": "Setup-String",
                "Row <b>id %s %s</b> is blocked": "Zeile <b>id %s %s</b> blockiert",
                "Database PostgreSQL": "Datenbank PostgreSQL",
                "Deploy only in the new": "Einsatz nur im neuen Bereich",
                "Use the existing": "Verwenden Sie eine bestehende",
                "Schema": "Schema",
                "Schema (not public)": "Schema (nicht öffentlich)",
                "Single installation": "Einzelne Installation",
                "Multiple installation": "Mehrfache Installation",
                'The value is not found': 'Wert nicht gefunden',

                "Edit totumCode in %s": "Bearbeiten von Totum-Code in %s",
                "Edit totumCode in value of %s": "Bearbeiten Totum-Code in Zelle %s",
                "Recalculate all table rows after changing the field type": "Neuberechnung aller Tabellenzeilen nach Änderung des Feldtyps",
                "Default printing": "Standarddruck",
                "Forms": "Formulare",
                "Add form": "Formular hinzufügen",
                    "On type change all field setting will be reset to default. If you want to save this changes — save field and change it's type after that":"Wenn Sie den Typ ändern, werden alle Feldeinstellungen auf ihre Standardwerte zurückgesetzt. Wenn Sie diese Änderungen beibehalten wollen, speichern Sie das Feld und ändern Sie anschließend seinen Typ.",
                    "On type change all field setting will be reset to saved. If you want to save this changes — save field and change it's type after that":"Wenn Sie den Typ ändern, werden alle Feldeinstellungen auf die gespeicherten Einstellungen zurückgesetzt. Wenn Sie diese Änderungen beibehalten wollen, speichern Sie das Feld und ändern Sie anschließend seinen Typ.",

                'RowList of page/table rows': 'RowList der Seiten-/Tabellenzeilen',

                'Attention':'Achtung',

                /*Kanban*/
                'Show columns extra info': 'Weitere Spalteninformationen anzeigen',
                'Hide columns extra info': 'Zusätzliche Spalteninformationen ausblenden',

                'Edited': 'Bearbeitet',
                'There is no any active trigger.': 'Keine Auslöser aktiviert.',
                'Your last comment editing': 'Bearbeitung des letzten Kommentars',
                "Cancel": "Abbrechen",
                "Add": "Hinzufügen",
                "Add a branch": "Verzweigung hinzufügen",
                "Add a row": "Eine Zeile hinzufügen",
                "Save": "Speichern",
                "Load": "Laden",
                "Open": "Öffnen",
                "Open all": "Alle öffnen",
                "Close": "Schließen",
                "Close all": "Alle schließen",
                "Close the panel": "Schließen Sie das Panel",
                'Apply': 'Anwenden',
                'By default': 'Standardmäßig',
                'Show all': 'Alle anzeigen',
                "Disable code": "Code deaktivieren",
                "Code disabling": "Deaktivierung des Codes",
                "Disable": "Deaktivieren",
                "Refresh": "Aktualisieren",
                "Tab": "Tab",
                'Create a set': 'Ein Set erstellen',
                'Hide admin. fields': 'Adm. Felder ausblenden',
                'Save the fields set': 'Eine Gruppe von Feldern speichern',
                'Set title': 'Name des Sets',

                "Upload limit exceeded": "Upload-Limit überschritten",
                "In a new tab": "In einem neuen Tab",
                "Expand All": "Alle erweitern",
                "Scheme of calculation": "Berechnungsschema",
                "Select user": "Benutzer auswählen",
                "Select values": "Werte auswählen",
                "Select": "ВAuswählen",
                "Loading": "Laden",
                '%s elements': '%s Elemente',
                '%s el.': '%s El.',
                'Change warning': 'Warnung bei einer Änderung',

                'Default sets': 'Standard-Sets',
                'Sets': 'Sets',
                'Save as default set': 'Als Standardset speichern',
                'Click hear to unlock': 'Zum Entsperren anklicken',


                'Apply to selected': 'Anwenden auf ausgewählte',
                'Fix the selected': 'Fixieren der ausgewählten',
                'Reset manuals': 'Reset manuals',
                'Reset manual': 'Reset manual',


                'Change in source table': 'Änderung in der Quelltabelle',
                'Add to source table': 'Zur Quelltabelle hinzufügen',

                'Viewing table settings': 'Anzeigen der Tabelleneinstellungen',
                'Editing table settings': 'Bearbeiten von Tabelleneinstellungen',

                'Viewing table field': 'Anzeigen eines Tabellenfeldes',
                'Editing table field': 'Bearbeiten eines Tabellenfeldes',

                'Viewing <b>%s</b> from table <b>%s</b>': 'Просмотр <b>%s</b> таблицы <b>%s</b>',
                'Editing <b>%s</b> from table <b>%s</b>': 'Редактирование <b>%s</b> таблицы <b>%s</b>',

                'Adding table': 'Tabelle hinzufügen',
                'Adding field': 'Ein Feld hinzufügen',
                'Adding row to table': 'Hinzufügen einer Zeile zur Tabelle',
                'Error in %s field': 'Fehler im Feld %s',
                'You can\'t put the Settings field type in linkToEdit': 'Sie können den Feldtyp Einstellungen nicht in linkToEdit eingeben',
                'Done': 'Erledigt',

                'Comments of field': 'Kommentare zum Feld',
                'Editing in the form': 'Bearbeitung im Formular',
                'Add comment': 'Einen Kommentar hinzufügen',

                'Manually': 'Manually',
                'Action not executed': 'Nicht erhobene Maßnahmen',

                'Manually changing the json field': 'Manuelles Ändern des json-Feldes',
                'JSON format error': 'Fehler im JSON-Format',
                'Fill in by the default settings': 'Füllen Sie die Standardeinstellungen aus',

                'Edit list/json': 'Liste/json bearbeiten',
                'Order': 'Reihenfolge',

                'Format': 'Format',
                'FormatShort': 'Format',
                'Copy': 'Kopieren',

                'Field <b>%s</b> text': 'Feldtext <b>%s</b>',

                'Field settings': 'Feldeinstellungen',
                'Edit text': 'Text bearbeiten',
                'Edit': 'Bearbeiten',
                'View': 'Ansehen',

                'Adding to the table is forbidden': 'Das Hinzufügen zur Tabelle ist verboten',

                'The field must be entered': 'Das Feld muss ausgefüllt werden',
                'The field %s must be entered': 'Das Feld %s muss ausgefüllt werden',
                'Value fails regexp validation: "%s"': 'Wert besteht die Validierung nicht regex: "%s"',

                'Change the password': 'Kennwort ändern',
                'New password': 'Neues Kennwort',
                'Selected': 'ВAusgewählt',
                'The data is incomplete. Use the search!': 'Die Daten sind nicht vollständig. Benutzen Sie die Suche!',

                'Filled "%s" field  error: %s': 'Fehler bei der Feldvervollständigung "%s": %s',
                'Failed to load data': 'Daten können nicht hochgeladen werden',
                'Required to save the item for file binding': 'Erfordert das Speichern eines Elements, um eine Datei zu binden',
                'Adding file': 'Datei hinzufügen',
                'Adding files': 'Dateien hinzufügen',
                'Drag and drop the file here': 'Ziehen Sie die Datei per Drag & Drop hierher',

                'There must be a number': 'Hier sollte eine Zahl stehen',

                'ApplyShort': 'Apply',
                'InvertShort': 'Invert.',
                'CancelShort': 'Abbrechen',

                'Field structure error': 'Fehler in der Feldstruktur',
                'Field %s structure error': 'Fehler in der Feldstruktur %s',
                'Field <b>%s</b> parameters': 'Parameter des Feldes <b>%s</b>',
                'Editor': "Editor",


                'ERR!': 'ERR!',
                'Error': 'Fehler',
                'The field accepts only one file': 'In das Feld kann nur eine Datei eingegeben werden',

                'Checking the file with the server': 'Überprüfung der Datei mit dem Server',

                'Empty': 'Пустое',
                'Files form <b>%s</b>': 'Datei Formular <b>%s</b>',
                'Edit field': 'Feld bearbeiten',
                'The JSON field content': 'Inhalt des JSON-Felde',
                'Choose the field': 'Ein Feld auswählen',


                "Remove from the filter": "Aus dem Filter entfernen",
                "Add to the filter": "Zum Filter hinzufügen",

                "Simple": 'Einfach',
                "Calculated in the cycle": 'Im Zyklus berechnet',
                "Calculated": 'Kalkulation',
                "Temporary": 'Temporär',
                "Cycles": 'Zyklen',

                'Code': 'Code',
                'Action code': 'Aktionscode',
                'ActionShort': 'Aktion',
                'SelectShort': 'Select',
                'Formating': 'Formatierung',
                'Selects': 'Selects',
                'Select': 'Select',
                'Fields calculation time': 'Feldberechnungszeit',

                "Send password to email": 'Kennwort per E-Mail senden',
                'New password': 'Neues Kennwort',
                'Register and send password to email': 'Registrieren Sie sich und senden Sie Ihr Kennwort per E-Mail',
                'Registration': 'Registrierung',
                'Service is optimized for browsers Chrome, Safari, Yandex, FireFox latest versions': 'Der Dienst ist für die neuesten Versionen von Chrome, Safari, Yandex und FireFox optimiert.',
                'I still want to see it': 'Ich möchte noch sehen',
                'Apply and close': 'Anwenden und schließen',
                'Shelve all': 'Alle verschieben',
                'Shelve': 'Ablegen',
                '__clock_shelve_panel': '<span class="clocks-na">На</span> <input type="number" step="1" value="10" class="form-control"/> <select class="form-control"><option  selected value="1">Minuten</option><option value="2">Stunden</option><option value="3">Tagen</option></select>',
                'Calculated value': 'Berechnetes Ergebnis',
                'Same as calculated': 'Gleich wie berechnet',
                'Show logs': 'Logs anzeigen',
                'Log': 'Log',
                'Calculate log': 'Berechnen log',
                'Log of field manual changes': 'Protokoll der manuellen Änderungen nach Feld',
                'Log is empty': 'Das Protokoll ist leer. Aktivieren Sie die Protokollierung und laden Sie die Seite neu',
                'Operation execution error': 'Fehler bei der Bedienung',
                'No server connection': 'Keine Verbindung zum Server',
                'export': 'export',
                'import': 'import',
                'Full': 'Vollständig',
                'Only rows': 'Nur Zeilen',
                'Copied': 'Kopiert',
                'Edit table settings': 'Tabelleneinstellungen bearbeiten',
                'Open Tables': 'Liste der Tabellen öffnen',
                'Open Tables Fields': 'Offenen Tabellenaufbau',
                'Creating tables versions': 'Tabellenversionen erstellen',
                'Changing versions of cycle tables': 'Ändern der Versionen der Schleifentabellen',
                'Restore': 'Wiederherstellen',
                'Restoring': 'Wiederherstellung',
                'Editing': 'Änderung',
                'Normal mode': 'Normaler Modus',
                ' / Version %s / Cycle %s': ' / Version %s / Zyklus %s',
                'Add field': 'Feld hinzufügen',
                '%s from %s': '%s von %s',
                'Reset': 'Zurücksetzen',
                'Comment of the table rows part': 'Kommentar zu den Tabellenzeilen',
                'Read only': 'Nur Lesen',
                'Filters': 'Filter',
                'Parameters': 'Einstellungen',
                'Rows part': 'Zeilen Teil',
                'with id': 'mit id',
                'Column footers': 'Fußzeilen der Spalten',
                'Out of column footers': 'Fußzeilen außerhalb der Spalten',

                'Logout': 'Logout',
                'Print': 'Drucken',
                ' from ': ' von ',
                'Header': 'Kopfzeile',
                'Columns': 'Spalten',
                'Footer': 'Fußzeile',
                'Prefilter': 'Vorfilter',

                'Hidden by default': 'Standardmäßig ausgeblendet',
                'Fields visibility': 'Sichtbarkeit des Feldes',

                'On adding': 'Beim Hinzufügen',
                'On changing': 'Beim Ändern',
                'On deleting': 'Beim Entfernen',
                'On click': 'Beim Klicken',
                'Editing': 'Bearbeitung',
                'Adding and editing is disallowed': 'Hinzufügen und Bearbeiten ist verboten',
                'Adding is disallowed': 'Hinzufügen ist verboten',
                'Editing is disallowed': 'Bearbeitung ist verboten',
                'Field %s': 'Feld %s',
                'Change': 'Ändernь',
                'Duplicate': 'Duplizieren',
                'Insert after': 'Einfügen nach',
                'Section': 'Abschnitt',
                'Change NAME': 'Ändern NAME',
                'Delete': 'Löschen',
                'Deleting': 'Entfernen',
                'Hide': 'Ausblenden',
                'Hiding': 'Ausblenden',

                'Open the panel': 'Das Panel öffnen',
                'Recalculate': 'Neuberechnen',
                'Recalculate cycle': 'Neuberechnung des Zyklus',

                'Show': 'Anzeigen',
                'Field width': 'Feldbreite',
                'Pin': 'Fixiren',
                'Unpin': 'Entriegeln',
                'Sort A-Z': 'Sortieren A-Z',
                'Sort Z-A': 'Sortieren Z-A',
                'Select': 'Markieren',
                'Table is empty': 'Die Tabelle ist leer',
                'Text field editing': 'Bearbeiten des Textfelds',
                'Documentaion': 'Dokumentation',

                'Delete field %s from table %s?': 'Feld %s aus Tabelle %s löschen?',
                'Deleting field %s from table %s?': 'Entfernung des Feldes %s aus der Tabelle %s?',


                'Fill in the values for unique fields': 'Füllen Sie die Werte für die individuellen Felder aus',

                'Operation': 'Vorgang',
                'Value': 'Wert',
                'Math operations': 'Mathematische Operationen',
                'Summ': 'Summe',
                'Number of numbers': 'Anzahl der Zahlen',
                'Average': 'Durchschnittliche',
                'Max': 'Maximales',
                'Min': 'Minimale',
                'Non-numeric elements': 'Nicht-numerische Elemente',
                'Calculated only by visible rows': 'Berechnet nur nach sichtbaren Zeilen',
                'By current page': 'Nach aktueller Seite',

                'Wait, the table is loading': 'Warten Sie, die Tabelle wird gerade geladen',
                'Add row': 'Eine Zeile hinzufügen',
                'Field % not found': 'Feld %s nicht gefunden',
                'Section deleting': "Entfernen eines Abschnitts",
                'Section editing': "Einen Abschnitt bearbeiten",


                'empty list': 'Leeres Blatt',
                'date': 'Datum',
                'date-time': 'Datum-Zeit',
                'date-time with secongs': 'Datum-Zeit mit Sekunden,
                'user id': 'Benutzer-ID',
                'user roles ids': 'Benutzerrollen-IDs',
                'table id': 'Tabellen-ID',
                'table NAME': 'Tabelle NAME',
                'temporary table HASH': 'temporäre Tabelle HASH',
                'adding row HASH': 'HASH der Additionszeichenkette',
                'calcuated table cycle id': 'Zyklus-ID der Abrechnungstabelle',
                'field NAME': 'NAME-Feld',
                'new line': 'neue Reihe',
                'tab': 'tab',
                'action code action type': 'Aktions-Code Aktionsart',
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
                'Reload': 'Обновить',


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
                'isCreatorSelector-NotCreatorView': 'Отключить админ-слой',
                'isCreatorSelector-CommonView': 'Отключить спецвид',
                'isCreatorSelector-MobileView': 'Переключить в десктоп',

                'Dbstring is incorrect': 'Ошибочная строка',
                'Create config and upload scheme': 'Создать конфиг и залить схему',
            }
    }
;