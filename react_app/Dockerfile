# Stage 1: Compiling the React application with Node 26
FROM node:26-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Pass the backend URL as a build argument
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:alpine
# Copy of the compiled folder 'dist'
COPY --from=build /app/dist /usr/share/nginx/html
# Nginx configuration for React routing
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
