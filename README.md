# Product Search Engine
Este é um projeto de um buscador de produtos que conecta-se com as páginas do Mercado Livre e do Buscapé, realizando web scraping para obter informações 
sobre produtos nas categorias Celular, Geladeira e TV. A busca pode ser feita tanto no Mercado Livre quanto no Buscapé, e as informações sobre cada 
produto incluem uma foto, descrição, categoria, preço e website de origem.

![img aplication](https://user-images.githubusercontent.com/108986668/232260863-4918125b-767e-4b5b-854e-15cfb564a6d5.png)

## Tecnologias Utilizadas
As principais tecnologias utilizadas neste projeto foram:
- Node.js
- Express
- MongoDB
- MongoDB Atlas
- Next.js
- React
- Axios
- Cheerio

## Deploy
Este projeto foi hospedado no Railway e pode ser acessado pelos seguintes links:
- Frontend: https://products-search.up.railway.app/
- Backend: https://products-search-service.up.railway.app/

## Uso
Para usar o buscador de produtos, siga os seguintes passos:

1. Acesse a página inicial do buscador.
2. Escolha a categoria de produto que deseja buscar, selecionando entre Mobile, Refrigerator e TV no menu dropdown.
3. Escolha o site de busca que deseja usar, selecionando entre Mercado Livre e Buscapé no menu dropdown.
4. Digite o termo de busca no campo de texto e pressione o botão de busca.
5. Os resultados da busca serão exibidos na página, mostrando a foto, descrição, categoria, preço e website de origem de cada produto.

## Instalação
Para instalar e configurar o projeto, siga os seguintes passos:

1. Clone o repositório para a sua máquina local:
```shell script
git clone https://github.com/welitonlimaa/product-search.git
```
2. Instale as dependências necessárias para o backend:
```bash
cd product-search/backend
npm install
```
3. Instale as dependências necessárias para o frontend:
```bash
cd ../frontend
npm install
```
4. Rode os serviços node e mongodb com o comando:
```bash
docker-compose up -d --build
```
6. Inicie o servidor backend:
```bash
npm run start
```
7. Inicie o servidor frontend:
```bash
npm run start
```

## Limitações
Algumas limitações conhecidas do projeto incluem:
- As buscas podem ser um pouco lentas, especialmente quando feitas pela primeira vez, devido ao web scraping necessário para obter as informações dos produtos.
- O web scraping pode ocasionalmente falhar ou retornar resultados incorretos, especialmente se o website-alvo mudar a sua estrutura ou layout.

## Problemas conhecidos
Alguns problemas conhecidos do projeto incluem:
- A conexão com o banco de dados pode falhar ou ficar instável em algumas circunstâncias.
- A exibição dos resultados pode ficar desalinhada
