# Define a imagem-base para criar a nova imagem
FROM node:latest

# Quem mantém essa imagem
MAINTAINER Time Concedidos

# Define variáveis de ambiente
ENV NODE_ENV=development

# Copia conteúdos para dentro da imagem (arquivos, códigos, etc.)
COPY . /var/www

# Diretório de trabalho onde o código será executado
WORKDIR /var/www

# Executa um comando enquanto o contêiner está sendo montado
RUN npm install

# Comando que será executado quando o contêiner for carregado
ENTRYPOINT ["npm", "start"]

#Define a porta que será exposta 
EXPOSE 3000  