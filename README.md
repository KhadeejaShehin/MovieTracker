# Movie & TV Show Tracker
A personal application to keep track of your movies and TV shows, record progress, rate titles, and receive recommendations.

## Setup Environment

python -m venv myvenv
### On Windows:
.\myvenv\Scripts\activate
### On Linux/macOS:
source venv/bin/activate

## Install the following packages in python
- pip install django
- pip install djangorestframework
- pip install django-cors-headers
- 
## Run server
- python manage.py makemigrations
- python manage.py migrate
- python manage.py runserver

## Frontend setup(React)

- npm install vite@latest
- npm create vite@latest
- cd moviefrontend
- npm install
## Install following packages
- npm install react-bootstrap bootstrap
- npm install axios

## Run server
- npm run dev

## Features
- Add Movie/TV show title with director’s name

- Categorize each item as: Watching, Completed, or Wishlist

- Filter by Genre (e.g., Romance, Comedy, Action, Fantasy)

- Track episodes watched / total episodes (TV shows only)

- Validation alerts when watched episodes exceed total episodes

- Record watching platform (e.g., Netflix, Prime)

- Allow rating and review for completed content

- Filter content based on genre



