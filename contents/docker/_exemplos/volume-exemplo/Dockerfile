# Define a imagem-base para criar a nova imagem
FROM node:latest

# Quem está mantendo e atualizando essa imagem
MAINTAINER William Cardoso

# Define variáveis de ambiente
ENV PORT=3000

# Copia conteúdos para dentro da imagem (arquivos, códigos-fontes)
COPY . /var/www

# Diretório de trabalho, onde o código será executado
WORKDIR /var/www

# Executa um comando enquanto a imagem está sendo construída
RUN npm install

# Comando que será executado quando o contêiner for carregado
ENTRYPOINT ["npm", "start"]

# Porta que será exposta
EXPOSE $PORT