@"
# Моят Личен Сайт - Интересни Факти за Мен

## 📋 Описание на проекта
Това е личен уебсайт, който представя мен и интересни факти за мен. Проектът е контейнеризиран с **Docker** и **Docker Compose**, като включва три отделни услуги.

## 🏗️ Структура на проекта
my-personal-site/
├── frontend/          # HTML + CSS + JS + Nginx
├── backend/           # Node.js + Express API
├── compose.yml        # Docker Compose конфигурация
├── README.md
└── (Dockerfiles)

## 🛠️ Използвани технологии
- **Frontend**: Nginx + HTML/CSS/JavaScript
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Контейнеризация**: Docker + Docker Compose

## 🚀 Как да стартирам проекта

```bash
# Клониране на проекта
git clone https://github.com/ТВОЕТО_USERNAME/my-personal-site.git
cd my-personal-site

# Стартиране на всички контейнери
docker compose up --build