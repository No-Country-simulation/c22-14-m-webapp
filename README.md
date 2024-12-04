# Telemedicina

## ℹ️ General Info

Telemedicine application enabling patients to schedule virtual appointments, doctors to access medical records, and administrators to manage consultations and assign doctors, with secure video calls and efficient management.

## 🏭 Applications

-   [Backend](./backend) — Telemedicina application backend.

    _To work properly, fill in the **`.env`** file. Use the **`.env.example`** file as an example._

-   [Frontend](./frontend) — Telemedicina application frontend.

    _To work properly, fill in the **`.env`** file. Use the **`.env.example`** file as an example._

## 🖍 Requirements

-   [NodeJS](https://nodejs.org/en/) (20.x.x);
-   [NPM](https://www.npmjs.com/) (10.x.x);
-   [PostgreSQL](https://www.postgresql.org/) (16.4)

## 💽 DB Schema

```mermaid
erDiagram
    USERS {
        int id PK
        string firtName
        string lastName
        string email
        string password
        int role_id FK
        datetime createdAt
        datetime updatedAt
    }
    ROLES {
        int id PK
        string name
        datetime createdAt
        datetime updatedAt
    }
    DOCTORS {
        int id PK, FK
        string specialty
        string license_number
        datetime createdAt
        datetime updatedAt
    }
    PATIENTS {
        int id PK, FK
        string address
        string dni
        date birthdate
        string phoneNumber
        datetime createdAt
        datetime updatedAt
    }
    ADMINS {
        int id PK, FK
        string department
        string access_level
        datetime createdAt
        datetime updatedAt
    }
    APPOINTMENTS {
        int id PK
        int doctor_id FK
        int patient_id FK
        datetime date
        string status
        datetime createdAt
        datetime updatedAt
    }
    MEDICAL_RECORDS {
        int id PK
        int appointment_id FK
        string consultation
        string diagnosis
        string treatment
        datetime createdAt
        datetime updatedAt
    }

    USERS ||--o| ROLES : "has role"
    USERS ||--o| DOCTORS : "is doctor"
    USERS ||--o| PATIENTS : "is patient"
    USERS ||--o| ADMINS : "is admin"
    DOCTORS ||--o{ APPOINTMENTS : "has appointments"
    PATIENTS ||--o{ APPOINTMENTS : "has appointments"
    APPOINTMENTS ||--o| MEDICAL_RECORDS : "has medical record"

```


## 🏃‍♂️ Simple Start

1. Install packages: **`npm install`**
2. Fill ENVs
3. Run backend: **`npm run dev`**
4. Run fronend: **`npm run dev`**

## 🏗️ Architecture

### 🌑 Backend

-   [Express](https://expressjs.com/) — a backend framework.
-   [Sequelize](https://sequelize.org/) — an ORM.

### 🌕 Frontend

-   [Material UI](https://mui.com/) - a component library.

### 🥊 Code quality



#### 📝 Ticket flow

```
<type>:<short-desc>
```

##### Types

-   TASK
-   FEAT
-   FIX

##### Examples

-   `TASK : Create home page`
-   `FIX : Login form validation`


#### 🌳 Branch flow

```
<type>/<project-prefix>-<issue-number>-<short-desc>
```

##### Types

-   task
-   fix

##### project-prefix

-   TM

##### Examples

-   `task/TM-6-create-home-page`
-   `fix/TM-16-fix-login-form-validation`


#### 🗂 Commit flow

```
<project-prefix>-<issue-number>: <modifier> <description>
```

##### Modifiers

-   `+` (add)
-   `*` (edit)
-   `-` (remove)

##### Examples

-   `TM-6: + home page`
-   `TM-12: * login form validation`
-   `TM-16: - age field`


#### 🏅 Pull Request flow

```
<project-prefix>-<issue-number>: <ticket-title>
```

##### Example

-   `TM-5: Create home page`


## 📦 CI/CD
