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

#### Exit from nginx container
```shell
exit
```


## Firstly SSL certificate set up:

1. Do all steps in `Project deploy` part
2. Go to nginx container:

```shell
docker exec -it friend_auto_nginx_front sh
```

3. Uncomment string `#include /etc/nginx/conf.d/https-site.conf;`in `/etc/nginx/nginx.conf`
```shell
vi /etc/nginx/nginx.conf
```

4. Check config file for valid and reload nginx:

```shell
nginx -t
nginx -s reload
```

5. Exit from nginx container

```shell
exit
```


## Update SSL certificate:

### Write command in cron:
```shell
docker-compose -f /root/FriendAuto/docker-compose.yml run --rm certbot renew --force-renewal
```

### Real cron task:
```shell
0 0 1 */1 * docker-compose -f /root/FriendAuto/docker-compose.yml run --rm certbot renew --force-renewal &> /root/logs/certbot_logs/cert_log_$(date +"\%Y-\%m-\%d_\%H-\%M-\%S").log
```

<br><br><br><br>

(Change admin password):
```shell
docker exec -it friend_auto_backend bash

python3 manage.py changepassword admin
```
