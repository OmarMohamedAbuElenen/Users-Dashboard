FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install @mui/x-charts
COPY . .
CMD ["npm", "start"]
