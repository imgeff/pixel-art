// Requisito 2
const divPalette = document.querySelector('#color-palette'); // Capturo a div da paleta
 const arrayColors = ['#000000', '#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9'];
 arrayColors.push('#3498DB', '#1ABC9C', '#2ECC71', '#F1C40F', '#F39C12');
 arrayColors.push('#D35400', 'white', '#BDC3C7', '#95A5A6', '#7F8C8D', '#34495E', '#2C3E50');
function createPalette() {
  for (let index = 0; index < arrayColors.length; index += 1) {
    const createDiv = document.createElement('div'); // Cria as divs filha
    createDiv.className = 'color'; // Adiciona Classe
    divPalette.appendChild(createDiv); // Atribui div color como filha de div color palette
    createDiv.style.backgroundColor = arrayColors[index];
  }
}

createPalette(); // 'ligar a função na tomada'

// Requisito 4
let main = document.querySelector('main'); //Capturei a main
let divPixelBoard = document.createElement('div'); //'criei a div que terá netos'
divPixelBoard.id = 'pixel-board';// Adicionei id 
main.append(divPixelBoard); // Inserir Div pixel board como filha de main
function pixelsBoard (input) {
  for (let index = 1; index <= input || index <= 5; index += 1) { // Estrutura de Repetição para criar 5 divs linhas
    let divLines = document.createElement('div'); // Cria linha div
    divLines.className = 'pixel-line'; // Atribui uma classe
    divPixelBoard.appendChild(divLines); // Atribui div linha como filha de div pixel board
    for (let index = 1; index <= input || index <= 5; index += 1) { // Estrutura de Repetição para criar 5 divs Pixels
      let divPixels = document.createElement('div'); // Cria div pixel
      divPixels.className = 'pixel'; // Atribui uma classe 
      divLines.appendChild(divPixels); // Atribui div pixel como filha de div line
    }
  }
}

pixelsBoard();

//  Requisito 6
const divBlack = document.querySelectorAll('.color')[0]; // Captura nossa primeira div color da paleta
divBlack.className = 'color selected'; // Adiciona classe a nossa div color

// Requisito 7
function clickColor(event) { // Função que será utilizada na função abaixo
  const classSelected = document.querySelectorAll('.selected'); // Seleciona todas as divs com a class selected
  for (let index = 0; index < classSelected.length; index += 1) { // Percorre todas as posições do  array de classes selected
    classSelected[index].className = 'color'; // Define somente 'color' como class para o elemento na posição index de Class selected
  }
  if (event.target.className === 'color') { // Estrutura de condição : o elemento alvo deverá possuir somente a class 'color' para ser verdadeira
    event.target.className = 'color selected'; // O elemento alvo  deverá atualizar suas classes para 'color selected'
  }
}

function selectedColor() {
  const divColor = document.getElementsByClassName('color'); // Captura todos os elementos com a classe 'color'
  for (let index = 0; index < divColor.length; index += 1) { // Estrutura de repetição  que percorrerá todos os elementos com a classe color
    divColor[index].addEventListener('click', clickColor); // Adiciona um evento (escutador) ao elemento com a classe color na posição index e invoca a função da linha 53
  }
}
selectedColor(); // invoca a função da linha 65

// Requisito 8
function paintPixels(event) {
  const color = document.querySelectorAll('.selected')[0].style.backgroundColor; // Captura a cor de fundo do elemento com a class selected
  if (event.target.style.backgroundColor !== color) { // Estrutura condicional = true; Se elemento selecionado através do target tiver cor de fundo diferente
    event.target.style.backgroundColor = color; // Atualiza cor de Fundo do elemento selecionado para a cor de fundo do elemento com a class 'selected'
  }
}

// const pixelClass = document.querySelectorAll('.pixel');// Captura array com todos os elementos da class 'pixel'
function selectedPixels() {
  for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) { // Estrutura de repetição para percorrer todos os elementos do array da class 'pixel'
    document.querySelectorAll('.pixel')[index].addEventListener('click', paintPixels); // Adiciona um evento de click no elemento de classe 'pixel' na posição index e invoca a função da linha 72
  }
}

selectedPixels();// invoca a função da linha 82

// Requisito 9
const divButtons = document.createElement('div');
const buttonClean = document.createElement('button');// Cria o elemento Button
const divButtonClean = document.createElement('div');
divButtonClean.id = 'position-clean';
divButtons.id = 'div-buttons';
buttonClean.id = 'clear-board';// Atribui o id 'clear-board' ao elemento button
buttonClean.innerText = 'Limpar';// Insere um texto no elemento button
divPalette.appendChild(divButtonClean);
divButtonClean.appendChild(buttonClean);

function clearBoard() {
  for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) { // Estrutura de repetição para percorrer todos os elementos com a class pixel
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';// Atualiza a cor de fundo para branco do elemento com a classe pixel na posição index
  }
}

buttonClean.addEventListener('click', clearBoard); // Adiciona um evento de click no elemento button, no qual invoca a função da linha 94

//  Requisito 10
const inputBoard = document.createElement('input');// Criação do elemento  Input
const buttonBoard = document.createElement('button');// Criação do elemento button
inputBoard.id = 'board-size';// Atribui Id  ao elemento input
buttonBoard.id = 'generate-board';// Atribui Id ao elemento button
buttonBoard.innerHTML = '<strong>Tamanho do Quadro</strong> | VQV';// insere texto ao elemento button
divPalette.appendChild(divButtons);// Atribui divButtons como filho de de divPalette
divButtons.append(inputBoard, buttonBoard);// Atribui os elementos input e button como filhos de divButtons
inputBoard.type = 'number';// Define o tipo de   caractere  aceito no input
inputBoard.min = 1;// Define o número minímo aceito no input
inputBoard.max = 50;// Define o número máximo aceito no input

function verification() {
  if (inputBoard.value === '') {
    alert('Board Inválido!');
    inputBoard.value = 5;
  } else if (inputBoard.value < 5) {
    alert('Por gentileza, insira um valor maior ou igual á 5!');
    inputBoard.value = 5;
  } else if (inputBoard.value > 50) {
    alert('Por gentileza, insira um valor menor ou igual á 50!');
    inputBoard.value = 50;
  }
}

buttonBoard.addEventListener('click', function () {
  verification();
  // const pixelBoard = document.querySelector('#pixel-board');
  const lines = document.querySelectorAll('.pixel-line');
  for (let index = 0; index < lines.length; index += 1) {
    lines[index].remove();
  }

  for (let index = 0; index < inputBoard.value; index += 1) {
    const divLines = document.createElement('div');
    divLines.className = 'pixel-line';
    divPixelBoard.appendChild(divLines);
    for (let index = 0; index < inputBoard.value; index += 1) {
      const divPixels = document.createElement('div');
      divPixels.className = 'pixel';
      divLines.appendChild(divPixels);
    }
  }
  selectedPixels();
});

// Adição de Dark e light Mode
let h2 = document.querySelector('h2');
let body = document.querySelector('body');
let buttonLight = document.createElement('button');
buttonLight.id = 'light-mode';
buttonLight.innerHTML = 'Light';
divButtons.appendChild(buttonLight);
buttonLight.addEventListener('click',light);

function light() {
  let divPalette = document.querySelector('#color-palette');
  divPalette.style.backgroundColor = 'white';
  buttonLight.style.backgroundColor = 'white';
  buttonLight.style.color = 'black';
  buttonLight.style.border = '1px solid black';
  body.style.backgroundColor = 'white';
  h2.style.color = 'black';
  buttonClean.style.backgroundColor = 'white';
  buttonClean.style.color = 'black';
  buttonClean.style.border = '1px solid black';
  inputBoard.style.backgroundColor = 'white';
  inputBoard.style.color = 'black';
  inputBoard.style.border = '1px solid black';
  buttonBoard.style.backgroundColor = 'white';
  buttonBoard.style.color = 'black';
  buttonBoard.style.border = '1px solid black';
  buttonDark.style.backgroundColor = 'white';
  buttonDark.style.color = 'black';
  buttonDark.style.border = '1px solid black';
}

let buttonDark = document.createElement('button');
buttonDark.id = 'dark-mode';
buttonDark.innerHTML = 'Dark';
divButtons.appendChild(buttonDark);
buttonDark.addEventListener('click',dark);

function dark() {
  let divPalette = document.querySelector('#color-palette');
  divPalette.style.backgroundColor = 'aqua';
  buttonDark.style.backgroundColor = 'black';
  buttonDark.style.color = 'white';
  buttonDark.style.border = '1px solid white';
  body.style.backgroundColor = 'black';
  h2.style.color = 'white';
  buttonClean.style.backgroundColor = 'black';
  buttonClean.style.color = 'white';
  buttonClean.style.border = '1px solid white';
  buttonDark.style.border = '1px solid white';
  inputBoard.style.backgroundColor = 'black';
  inputBoard.style.color = 'white';
  inputBoard.style.border = '1px solid white';
  buttonBoard.style.backgroundColor = 'black';
  buttonBoard.style.color = 'white';
  buttonBoard.style.border = '1px solid white';
  buttonLight.style.backgroundColor = 'black';
  buttonLight.style.color = 'white';
  buttonLight.style.border = '1px solid white';
}