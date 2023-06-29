# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Node.js application runs (assuming it's port 3000)
EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "node", "server.js" ]
