-- 项目表
create table project
(
    id            INTEGER     not null
        primary key autoincrement,
    name  text(255)    not null,
    package_name       text(255)    not null,
    is_deleted    integer(11) not null
);

