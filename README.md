# Users-Dashboard

This backend service is developed to process and provide insights into user data. It implements functionalities such as loading and parsing data, filtering users, data aggregation, implementing search functionality, and exposing an API endpoint for accessing filtered user data.

## Requirements

- Docker

## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/OmarMohamedAbuElenen/Users-Dashboard.git
 
2. Run `docker-compose up`
3. In django container terminal run 
  
   1. `pyhton manage.py migrate`

    2. `python manage.py load_userdata`

## NOTE

This project was developed on macOS, so you might find the Dockerfile format as LF. You have to change it to CRLF or enable WSL on Docker.