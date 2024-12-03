# Use the Node.js LTS base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend source code
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
