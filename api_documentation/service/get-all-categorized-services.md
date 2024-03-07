# Получение всех категорий

### _URL:_

```text
http://188.225.36.185/api/service/get-all-categorized-services/
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
       // id категории
        "category_id": 1,
        // название категории
        "category_name": "Диагностика авто",
        // услуги категории
        "services": []
    },
    {
        "category_id": 2,
        "category_name": "Ремонт двигателя",
        "services": []
    },
    {
        "category_id": 3,
        "category_name": "Ремонт ходовой части",
        "services": []
    },
    {
        "category_id": 4,
        "category_name": "Ремонт КПП",
        "services": [
            {
                "id": 6,
                "name": "new service 6"
            },
            {
                "id": 7,
                "name": "new service 7"
            }
        ]
    },
    {
        "category_id": 5,
        "category_name": "Кузов и прочее",
        "services": [
            {
                // id услуги
                "id": 5,
                // название услуги
                "name": "new service 5"
            }
        ]
    }
]
```

<hr>

### _Статус ответа (при успехе):_ 200
