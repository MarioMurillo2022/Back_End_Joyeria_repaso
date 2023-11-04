-- Active: 1697072377566@@localhost@5432@db_joyeria@public

create table
    tbl_users(
        email VARCHAR(60) PRIMARY key,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        pass VARCHAR(20),
        is_active BOOLEAN DEFAULT true
    );