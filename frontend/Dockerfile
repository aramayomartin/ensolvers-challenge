# Usar una imagen de Node.js como base
FROM node:14-alpine as builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json e instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación React
RUN npm run build

# Usar una imagen de Nginx para servir la aplicación construida
FROM nginx:alpine

# Copiar los archivos de la aplicación construida desde el "builder" stage al directorio de trabajo de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto en el que se ejecuta Nginx
EXPOSE 80

# No se necesita un comando CMD, ya que la imagen de Nginx tiene uno por defecto que sirve la aplicación web
