

//   --------------------------------------------------------------////////////////////-----------------------------------------

const elStartGameButton = document.querySelector('input[name="bStartGame"]');
const elMainBlock = document.querySelector('.main-block');
    // Кнопки
    const elButtonUp = document.querySelector('input[name="bUp"]');
    const elButtonLeft = document.querySelector('input[name="bLeft"]');
    const elButtonDown = document.querySelector('input[name="bDown"]');
const elButtonRight = document.querySelector('input[name="bRight"]');
    
    const elPlayingFieldWidth = document.querySelector('input[name="playing-field-width"]');// Ширина ігрового поля
    const elPlayingFieldHeight = document.querySelector('input[name="playing-field-height"]');// Висота ігрового поля
    const elNumberOfMonsters = document.querySelector('input[name="number-of-monsters"]');// Кількість монстрів
    const elPacManStepSize = document.querySelector('input[name="pacman-step-size"]');// Розмір кроку ПакМана

    // Розмір істоти
const CreatureWidth = 100;
const CreatureHeight = 100;
    // Розмір ПакМана прирівнюємо до розміру інших істот
const PacManWidth = CreatureWidth;
const PacManHeight = CreatureHeight;

let elPacManScin;
let PacManStepPx;
let playFieldWidth;
let playFieldHeight;

let numberOfMonsters; // +2 PacMan and FinishPoint

let gameStarted = 0; // Чи вже запущена гра
let creaturesArr = []; // Масив істот

//   --------------------------------------------------------------////////////////////-----------------------------------------

const StartGameFunction = (e) => {

    // Отримуємо дані які ввів користувач з елементів
    playFieldWidth = parseInt( elPlayingFieldWidth.value );
    playFieldHeight =  parseInt( elPlayingFieldHeight.value );
    numberOfMonsters =  parseInt( elNumberOfMonsters.value );
    PacManStepPx =  parseInt( elPacManStepSize.value );
        
    createCreatures();
    drawPlayingFieldFunction();
    gameStarted = 1;
    console.log('New game Started')
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const drawPlayingFieldFunction = () => {
    
    let ResultHTML = '';
        elMainBlock.innerHTML = '';
        elMainBlock.insertAdjacentHTML('beforeend', ' Let\'s Play ' + playFieldWidth + 'x' + playFieldHeight);
        elMainBlock.insertAdjacentHTML('beforeend',
            `    <div class="playField" style="position: absolute; top:10px; left:200px;
            width: ${playFieldWidth}px; height: ${playFieldHeight}px;border:1px solid black;"></div>`);
        
    // Отримуємо новостворений блок    
        const elPlayFieldBlock = document.querySelector('.playField');

        ResultHTML += `     <div class="red-block" style="position: absolute; top:${creaturesArr[0][1]}px; left: ${creaturesArr[0][0]}px; 
        width:${PacManWidth}px;height:${PacManHeight}px;border:0px solid red;">
            <img src="img/pacman.png" class="pacman-scin" alt="pac-man:${creaturesArr[0][1]}x${creaturesArr[0][1]}" width="100%">
        </div>`;
    
    
    for (let i = 1; i <= (numberOfMonsters); i++) {
        ResultHTML += `     <div class="grey-block-${i}" style="position: absolute; top:${creaturesArr[i][1]}px; left:${creaturesArr[i][0]}px; 
        width:${CreatureWidth}px;height:${CreatureHeight}px;border:0px solid red;">
            <img src="img/Blinky1.png" alt="monster1:${creaturesArr[i][1]}x${creaturesArr[i][1]}" width="100%">
        </div>`
    }

    ResultHTML += `     <div class="green-block" style="position: absolute;
         top:${creaturesArr[numberOfMonsters + 1][1]}px; left: ${creaturesArr[numberOfMonsters + 1][0]}px;
        width:${CreatureWidth}px;height:${CreatureHeight}px;border:0px solid red;">
            <img src="img/Blinky2.png" alt="monster1" width="100%">
        </div>`;

        elPlayFieldBlock.insertAdjacentHTML('beforeend', ResultHTML);
elPacManScin = document.querySelector('.pacman-scin');
    
    
       //ResultHTML += 123
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const createCreatures = () => {
    creaturesArr.length = [];
console.log('numberOfMonsters: ' + numberOfMonsters);
    // Масив
    // 0 0 пакман ширина
    // 0 1 пакман висота
    // i 0 монстр ширина
    // i 1 монстр висота
    // -1 0 фініш ширина
    // -1 1 фініш висота
       
    creaturesArr.push( new Array());

    for (let i = 0; i <= (numberOfMonsters + 1); i++) {
        creaturesArr.push(new Array());
        let colisResult = 1;
        let creX;
        let creY;
        while ((colisResult) === 1)
        {
            creX = randXY(0, playFieldWidth, CreatureWidth);
            creY = randXY(0, playFieldHeight, CreatureHeight);
            //console.log('Generate:  x = ' + creX + ' y = ' + creY);
            colisResult = collisionCheckFunction (creX, creY);
        }
        creaturesArr[i].push (creX);
        creaturesArr[i].push(creY);
        
        console.log('Create Creature ' + i + ' [ x = ' + creaturesArr[i][0] + ' y = ' + creaturesArr[i][1] + ' ] ');
        
    }
    // console.log('-----------------------------');
    // console.log('creaturesArr[0][0] ' + creaturesArr[0][0]);
     console.log('creaturesArr[0] ' + creaturesArr[0]);
    
     console.log('creaturesArr.length ' + creaturesArr.length);
 

 

}


//   --------------------------------------------------------------////////////////////-----------------------------------------

const collisionCheckFunction = (x, y) => {
    if (x >= 0 && y >= 0) {
        
        //console.log('x = ' + x + ' y = ' + y);
        let collisionDetected = 0;
        if (
            (x >= 0 && y >= 0) &&
            (x <= (playFieldWidth - CreatureWidth) && y <= (playFieldHeight - CreatureHeight))
        )
        {
            console.log('creaturesArr.length = ' + creaturesArr.length);
            for (let i = 0; i <= creaturesArr.length-2 ; i++) {
                console.log("x= " + x + " y= " + y + " creaturesArr[" + i + "][0]= " + creaturesArr[i][0] +
                    " creaturesArr[" + i + "][1]= " + creaturesArr[i][1]);

                if (x === (creaturesArr[i][0]) && y === (creaturesArr[i][1]))
                {
                    collisionDetected = i;
                    console.log("Cheked return i = " + i);
                    
                }
                else {
                    console.log("Cheked return 0");
                }
            }
            // if ((x === creaturesArr[numberOfMonsters + 1][0]) &&
            //     (y === creaturesArr[numberOfMonsters + 1][1]))
            //     {collisionDetected = 0}
            if (collisionDetected > 0) { return collisionDetected } else  { return 0 }
            console.log("Cheked");
        }
    }
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const moveFunction = (moveDirection) => { 
    //console.log(gameStarted);
    //console.log('MOVE ' + moveDirection);
    if (gameStarted === 1) {
        //console.log(elPacManScin);
        if (moveDirection === "moveUp") {
            elPacManScin.style.transform = "rotate(270deg)";
            if (collisionCheckFunction(creaturesArr[0][0], creaturesArr[0][1] - PacManHeight) === 0)
                {creaturesArr[0][1] -= PacManHeight};
        }
        if (moveDirection === "moveLeft") {
            elPacManScin.style.transform = "scaleX(-1)";
            if (collisionCheckFunction(creaturesArr[0][0] - PacManWidth, creaturesArr[0][1]) === 0)
                {creaturesArr[0][0] -= PacManWidth};
        }
        if (moveDirection === "moveDown") {
            elPacManScin.style.transform = "rotate(90deg)";
            if (collisionCheckFunction(creaturesArr[0][0], creaturesArr[0][1] + PacManHeight) === 0)
                {creaturesArr[0][1] += PacManHeight};
        }
        if (moveDirection === "moveRight") {
            elPacManScin.style.transform = "scaleX(1)";
            if (collisionCheckFunction(creaturesArr[0][0] + PacManWidth, creaturesArr[0][1]) === 0)
                {creaturesArr[0][0] += PacManWidth};
        }
        drawPlayingFieldFunction();
        console.log(moveDirection + " position of PacMan [" + creaturesArr[0][0] + ", " + creaturesArr[0][1] + "]");
    }
    else { console.log('Please start the game'); }
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const randXY = (min,max,num) => {
    return Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

// Кнопка Старт
elStartGameButton.addEventListener('click', () => {StartGameFunction()});

// Кнопки стрілки
elButtonUp.addEventListener     ('click', (e) => {
    if (e.target.name === 'bUp')    {moveFunction('moveUp')}
});
elButtonLeft.addEventListener   ('click', (e) => {
    if (e.target.name === 'bLeft')  {moveFunction('moveLeft')}
});
elButtonDown.addEventListener   ('click', (e) => {
    if (e.target.name === 'bDown')  {moveFunction('moveDown')}
});
elButtonRight.addEventListener  ('click', (e) => {
    if (e.target.name === 'bRight') {moveFunction('moveRight')}
});
// Кнопки стріочки з клавіатури
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp")       { moveFunction('moveUp')    };
    if (e.code === "ArrowLeft")     { moveFunction('moveLeft')  };
    if (e.code === "ArrowDown")     { moveFunction('moveDown')  };
    if (e.code === "ArrowRight")    { moveFunction('moveRight') };
    if (e.code === "Enter")         { StartGameFunction() };
});







