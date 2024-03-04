# Добавление услуги

### _URL:_

```text
http://188.225.36.185/api/service/add-service/
```

### _Метод:_ POST

<hr>

### _Пример отправки запроса:_

> body 👇 (JSON)

```json lines
{
    // название услуги
    "name": "Ремонт трубопровода в лифте",
    // id категории
    "category": 3,
    // цена услуги
    "price": "15000"
}
```

> headers 👇

```json lines
{
    // токен юзера
    "Authorization": "Bearer eyJhbGpXVCJ9.eyJpZCI6NSMjMyfQ.yMy6LZ0QA8JsB3LLl0"
}
```

<hr>

### _Пример ответа сервера (JSON):_

```json lines
{
    // id услуги
    "id": 5,
    // название услуги
    "name": "Ремонт трубопровода в лифте",
    // цена услуги
    "price": "15000"
}
```

<hr>

### _Статус ответа (при успехе):_ 201