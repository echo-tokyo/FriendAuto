# Получение всех анкет

### _URL:_

```text
http://188.225.36.185/api/worksheet/get-worksheets/
```

### _Метод:_ GET

<hr>

### _Пример отправки запроса:_

> headers 👇

```json5
{
    // токен юзера
    "Authorization": "Bearer eyJhbGpXVCJ9.eyJpZCI6NSMjMyfQ.yMy6LZ0QA8JsB3LLl0"
}
```

<hr>

### _Пример ответа сервера (JSON, массив объектов):_

```json5
[
    {
        "id": 4,
        // имя
        "client_name": "Алексей",
        // фамилия
        "client_surname": "Несповитый",
        // номер телефона (11 цифр и ничего другого)
        "client_phone": "85566778890",
        // время отправки записи на услугу
        "sent_at": "2024-03-09 19:41",
        // информация о вакансии, на которую подал анкету клиент
        "vacancy": {
            "id": 8,
            "name": "Чувааак"
        }
    },
        {
        "id": 1,
        "client_name": "Никита",
        "client_surname": "Стрижаков",
        "client_phone": "85566778899",
        "sent_at": "2024-03-09 19:45",
        "vacancy": {
            // id вакансии
            "id": 8,
            // название вакансии
            "name": "Чувааак"
        }
    }
]
```

<hr>

### _Статус ответа (при успехе):_ 200
