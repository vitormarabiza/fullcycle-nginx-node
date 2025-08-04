FROM node:18

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia package.json e package-lock.json
COPY package.json ./

# Instala dependências como root
RUN npm install

# Copia todo o código
COPY . .

# Ajusta permissões para o usuário node
RUN chown -R node:node /usr/src/app

# Troca para o usuário node (boa prática)
USER node

EXPOSE 3000
CMD ["npm", "start"]