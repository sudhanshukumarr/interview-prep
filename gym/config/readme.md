MVP TABLES

1. CRUD Gyms -> id, name, address, status ENUM(0 | 1) default 1
2. CRUD Users -> id, Name, email, phone, dob, type ENUM(TRAINER | CLIENT), status
3. CRUD gym_trainer -> id, gym_id, trainer_id, status
4. CRUD Plans -> id, name, duration (in months), price, gym_id, status
5. CRUD Membership -> id, user_id, plan_id, expire_date, status
6. CRUD Payments -> id, user_id, plan_id, amount, status