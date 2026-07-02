# Secure Node.js Pipeline

# פרטי הסטודנט

שם: Hosni Rabi

סוג ההגשה: יחיד

# תיאור הפרויקט

זוהי ההגשה עבור פרויקט הגמר בקורס DevOps.

מטרת הפרויקט היא לפרוס אתר To-Do מאובטח ב־Node.js באמצעות Docker, Docker Compose, Nginx כ־Reverse Proxy, MongoDB כמסד הנתונים, ו־GitHub Actions עבור CI.

# הפרויקט משתמש בארבעת השירותים הבאים #

# Nginx

מקבל את כל בקשות ה־HTTP בפורט 8080.

מאפשר גישה ל־`/admin-panel` רק אם הוגדרה כתובת ה־Docker IP שלך.

# Node.js ו־Express

מריץ את אתר ה־To-Do על פורט 3000.

מגיש את קבצי ה־Frontend.

# MongoDB

מסד נתונים ששומר את המשימות שמוזנות באתר.

הנתונים נשמרים באמצעות Docker Volume.

# Mongo Express

ממשק אינטרנט לניהול מסד הנתונים MongoDB.

# בחירת מסד הנתונים #

מסד הנתונים: MongoDB

סיבה 1: משתלב בצורה טבעית עם Mongoose.

סיבה 2: קל משקל וקל להרצה בתוך Docker.

# ארכיטקטורת הרשת #

בפרויקט נעשה שימוש בשתי רשתות Docker.

# frontend-net

- מחברת בין

Nginx

Node.js

# backend-net

- מחברת בין

Nginx

MongoDB

Mongo Express

# תכונות אבטחה #

- קונטיינר Docker שאינו רץ כ־Root (`USER node`)
- Reverse Proxy באמצעות Nginx
- נתיב `/admin-panel` מוגן
- משתני סביבה נשמרים בקובץ `.env`
- קובץ `.env` אינו מועלה ל־Git באמצעות `.gitignore`
- Docker Volume לשמירת נתוני MongoDB
- GitHub Actions CI Pipeline
- עבודה באמצעות Pull Requests

```
secure-nodejs-pipeline/

.github/
  workflows/
    ci-pipeline.yml

app/

  backEnd/
    server.js
    toDoController.js
    toDoModule.js
    toDoRoute.js
    package.json
    package-lock.json
    db.js
    .env

  public/
    about.html
    index.html
    toDo.css

  Dockerfile

nginx/
   default.conf.template

.env
.env.example
.gitignore
docker-compose.yml
README.md
```

# התחלה מהירה #

צור קובץ `.env` באמצעות הקובץ `.env.example`.

# הפעלת האפליקציה #

```bash
docker compose up --build
```

# טכנולוגיות בשימוש #

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose
- Nginx
- GitHub Actions
- Git