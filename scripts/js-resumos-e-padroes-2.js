//Desestruturação de Objetos
//Atribuição via Desestrutução
let pessoa = {
    nome: 'William',
    sobrenome: 'Cardoso',
    idade: 34,
    social: {
        facebook: 'williamface',
        instagram: {
            url: '@williaminsta',
            seguidores: 1000
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

function getNameAndAge(obj){
    return obj.nome + ", " + obj.idade + " anos";
};

function showNameAndAge(){
    alert(getNameAndAge(pessoa));
};

//desconstruindo obj passando por paramentros da função
function getSocialNetwork({nome = "Sem nome (não foi passado)", sobrenome, social:{facebook}, social:{instagram:{url:link_para_o_insta}}}){
    return `${nome} ${sobrenome},\nFacebook: ${facebook},\nInstagram: ${link_para_o_insta}`;
};

function showSocialNetwork(){
    alert(getSocialNetwork(pessoa));
};

//---------------------------
//Desconstruindo objetos criando novas variáveis

//let {facebook, instagram} = pessoa.social;

//renomeia o nome para primeiro nome
//let {nome:primeiroNome, sobrenome, idade = 0} = pessoa;
//let {facebook} = pessoa.social;

//acessando a url do instagram e renomeando para instagram
//let {nome, idade, social:{facebook}, social:{instagram:{url:instagram, seguidores}}} = pessoa;

//------------------------

let array = ['William', 'Cardoso', 'Arquiteto de Sistemas'];

let [nome, sobrenome, profissao] = array;
console.log(nome, sobrenome, profissao);

let [a] = array; // só pega o primeiro item do array
console.log(a);

let [,,ocupacao] = array;
console.log(ocupacao);

//raramente se usa a seguinte forma
let [fruta1, fruta2] = ['banana', 'maça'];
console.log(fruta2, fruta1);

//Desconstruindo arrays por funções
function createProfile(){
    let dataProfile = ["William", "Arquiteto de Sistemas", "34"]
    return dataProfile;
};

function confirmProfile(){
    if(confirm("Deseja criar seu perfil?") == true){
        let [name, occupation, age] = createProfile();
        alert("Perfil criado com os seguintes dados:\n\n"
            + "Nome: " + name + ";\n"
            + "Profissão: " + occupation + ";\n"
            + "Idade: " + age + ".");
    }else{
        alert("Perfil não criado!")
    }
};

//------------------------

//Fetch, Promise, async/await
function loadNumberOfPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            console.log('Chegou aqui');
            document.querySelector('.posts').innerHTML = json.length + " posts";
            makeBlog(json);
        })
        .catch(function(error){
            alert("Erro: \n\n" + error);
        })
};

function makeBlog(list){
    let html = '';

    for(let i in list){
        html += '<h3>' + list[i].title + '</h3>';
        html += '<br>' + list[i].body + '<br>';
        html += '<hr>';
    };
    document.querySelector('.make-blog').innerHTML = html;
};

function makeBlog2(list){ //para mostrar em outra div
    let html = '';

    for(let i in list){
        html += '<h3>' + list[i].title + '</h3>';
        html += '<br>' + list[i].body + '<br>';
        html += '<hr>';
    };
    document.querySelector('.make-blog-1').innerHTML = html;
};

async function loadNumberOfPostsWithAsyncAndAwait(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    makeBlog2(json);
};

async function insertPost(){
    document.querySelector('.insert-post').innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de Teste',
            body: 'Corpo de Teste',
            id: 101
        })
    });
    let json = await req.json();
    console.log(json);
    document.querySelector('.insert-post').innerHTML = 
        `Dados inseridos com sucesso: <br>${json.title}; <br>${json.body}.`;
};

async function getPost(){
    document.querySelector('.get-post').innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET'
    });
    let json = await req.json();
    document.querySelector('.get-post').innerHTML = 
        'ID: ' + json.id + '<br>Título: ' + json.title + '<br>Corpo: ' + json.body;
};

//Upload de arquivos
async function sendFile(){
    let file = document.getElementById('file-0').files[0];
    //console.log(file); //conteúdo do arquivo

    let body = new FormData();
    body.append('titulo', 'Texto de teste');
    body.append('file-0', file);

    let req = await fetch('https://site-fake.com.br', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

function showThumbnail(){
    let file = document.getElementById('file-1').files[0];
    let img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.width = 100;
    document.querySelector('#thumbnails-0').appendChild(img);
}

function showThumbnailFileReader(){
    let reader = new FileReader();
    let file = document.getElementById('file-2').files[0];

    reader.onloadend = () => {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.width = 100;
        document.querySelector('#thumbnails-1').appendChild(img);
    }

    reader.readAsDataURL(file);
}