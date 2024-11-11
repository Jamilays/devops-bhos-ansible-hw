# Use official Node.js image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files to the container
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]

