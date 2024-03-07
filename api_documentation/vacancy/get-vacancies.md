# Получение всех вакансий

### _URL:_

```text
http://188.225.36.185/api/vacancy/get-vacancies/
```

### _Метод:_ GET

<hr>

### _Пример отправки запроса:_

```json5
```

<hr>

### _Пример ответа сервера (JSON, массив объектов):_

```json5
[
    {
        // id вакансии
        "id": 3,
        // название вакансии
        "title": "Обезьяна",
        // url для фото вакансии
        "photo_url": "http://127.0.0.1:8000/media/vacancy_photos/monkey_high_resolution.jpg"
    },
    {
        "id": 4,
        "title": "Чувак",
        "photo_url": "http://127.0.0.1:8000/media/vacancy_photos/%D0%A7%D1%83%D0%B2%D0%B0%D0%B0%D0%B0%D0%B0%D0%B0%D0%BA.png"
    }
]
```

<hr>

### _Статус ответа (при успехе):_ 200
