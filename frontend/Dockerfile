# Use Node.js image for building the React app
FROM node:18.7.1 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app code
COPY . .

# Build the React app for production
RUN npm run build

# Use the official Nginx image to serve the built React app
FROM nginx:alpine

# Copy the build folder from the build stage to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx (frontend)
EXPOSE 80

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
