FROM node:17

# Working Dir
WORKDIR /usr/src/app

# Copy Package
COPY package.json npm-shrinkwrap.json ./

# Install Prettier
RUN npm install prettier -g

# Install Files
RUN npm install

# Copy resource file
COPY . .

# Expose the api port
EXPOSE 5000

CMD ["npm" , "start"]