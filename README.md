# Backend


## Project deploy:

> ** Note:
> Before deploy project you need set up DB (MySQL) according to file [/FriendAuto/db_info/InitCommands.sql](db_info%2FInitCommands.sql)

### On server

#### Clone repo:
```shell
git clone https://github.com/echo-tokyo/FriendAuto.git
```

#### Go to repo root dir:
```shell
cd ./FriendAuto
```

#### Up docker containers:
```shell
docker-compose up --build -d
```

#### Go to backend container:
```shell
docker exec -it friend_auto_backend bash
```

### In friend_auto_backend docker container

#### Migrate DB and create first superuser:
```shell
python3 manage.py migrate
python3 manage.py createsuperuser --first-user
```
