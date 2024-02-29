--- создание БД
CREATE DATABASE `friend_auto`
    DEFAULT CHARACTER SET utf8
    DEFAULT COLLATE utf8_general_ci;

--- создание юзера с полным доступом к БД
CREATE USER 'friend_auto_user'@'%' IDENTIFIED BY '*****';
GRANT ALL PRIVILEGES
    ON `friend_auto`.*
    TO 'friend_auto_user'@'%';
FLUSH PRIVILEGES;

--- здесь было создание моделей в Django и миграции

--- добавление категорий для услуг
INSERT INTO service_category (name) VALUES
    ('Диагностика авто'),
    ('Ремонт двигателя'),
    ('Ремонт ходовой части'),
    ('Ремонт КПП'),
    ('Кузов и прочее');
