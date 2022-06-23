
const elStartGameButton = document.querySelector('input[name="bStartGame"]');
const elMainBlock = document.querySelector('.main-block');
    // Кнопки
    const elButtonUp = document.querySelector('input[name="bUp"]');
    const elButtonLeft = document.querySelector('input[name="bLeft"]');
    const elButtonDown = document.querySelector('input[name="bDown"]');
    const elButtonRight = document.querySelector('input[name="bRight"]');
    
let gameStarted = 0; // Чи вже запущена гра

const drawPlayingFieldFunction = () => {

        // Отримуємо початкові потрібні елементи
    // Основний блок який будемо наповнювати


        // Розміри ігрового поля
    const elPlayingFieldWidth = document.querySelector('input[name="playing-field-width"]');
    const elPlayingFieldHeight = document.querySelector('input[name="playing-field-height"]');
        // Кількість монстрів
    const elNumberOfMonsters = document.querySelector('input[name="number-of-monsters"]');
        // Розмір кроку ПакМана
    const elPacManStepSize = document.querySelector('input[name="pacman-step-size"]');

    // Отримуємо дані які ввів користувач з елементів
    const playFieldWidth = elPlayingFieldWidth.value;
    const playFieldHeight = elPlayingFieldHeight.value;
    const numberOfMonsters = elNumberOfMonsters.value;
    const PacManStepPx = elPacManStepSize.value;
    // Доповнюємо своїми данними
        // Розмір монстра
    const MonsterWidth = 100;
    const MonsterHeight = 100;
        // Розмір ПакМана
    const PacManWidth = 100;
    const PacManHeight = 100;
        
        let ResultHTML = '';
        elMainBlock.innerHTML = '';
        elMainBlock.insertAdjacentHTML('beforeend', ' Let\'s Play ' + playFieldWidth + 'x' + playFieldHeight);
        elMainBlock.insertAdjacentHTML('beforeend',
            `    <div class="playField" style="position: absolute; top:10px; left:200px;
            width: ${playFieldWidth}px; height: ${playFieldHeight}px;border:1px solid black;"></div>`);
        
    // Отримуємо новостворений блок    
        const elPlayFieldBlock = document.querySelector('.playField');

        // Через цикл наповнюємо масив а потім з масиву в результ
        ResultHTML += '<br>PacMan ' + PacManWidth + 'x' + PacManHeight;
        ResultHTML += '<br>Monster ' + MonsterWidth + 'x' + MonsterHeight;

        elPlayFieldBlock.insertAdjacentHTML('beforeend', ResultHTML);

    // Масив
    // 0 0 пакман ширина
    // 0 1 пакман висота
    // i 0 монстр ширина
    // i 1 монстр висота
    // -1 0 фініш ширина
    // -1 1 фініш висота
    
    
    
    let creaturesArr = [numberOfMonsters+2];
    creaturesArr[0] = new Array(2);
    // ПакМана розміщуємо по центру
    creaturesArr[0][0] = (playFieldWidth / 2) | 0;
    creaturesArr[0][1] = (playFieldHeight / 2) | 0;
    

for (var i=0; i<=myArray.length-1; i++) {
  myArray[i] = new Array(5);
}


    console.log('creaturesArr[0][0] ' + creaturesArr[0][0]);
    console.log('creaturesArr[0] ' + creaturesArr[0]);
    console.log((9/2)|0);
    console.log('creaturesArr.length ' + creaturesArr.length);

    












    //ResultHTML += 123
}














const StartGameFunction = (e) => {
drawPlayingFieldFunction();
gameStarted = 1;
}

const moveFunction = (moveDirection) => { 
    //console.log('MOVE ' + moveDirection);
    if (moveDirection === "moveUp") {
        console.log(moveDirection);
        collisionCheckFunction()
    }
    if (moveDirection === "moveLeft") {
        console.log(moveDirection);
        collisionCheckFunction()
    }
    if (moveDirection === "moveDown") {
        console.log(moveDirection);
        collisionCheckFunction()
    }
    if (moveDirection === "moveRight") {
        console.log(moveDirection);
        collisionCheckFunction()
    }
}





const collisionCheckFunction = () => {
    console.log("Cheked");
}





// Кнопка Старт
elStartGameButton.addEventListener('click', () => {StartGameFunction()});

// Кнопки стрілки
elButtonUp.addEventListener('click', (e) => {
    if (e.target.name === 'bUp')    {moveFunction('moveUp')}
});
elButtonLeft.addEventListener('click', (e) => {
    if (e.target.name === 'bLeft')  {moveFunction('moveLeft')}
});
elButtonDown.addEventListener('click', (e) => {
    if (e.target.name === 'bDown')  {moveFunction('moveDown')}
});
elButtonRight.addEventListener('click', (e) => {
    if (e.target.name === 'bRight') {moveFunction('moveRight')}
});
// Кнопки стріочки з клавіатури
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp")       { moveFunction('moveUp')    };
    if (e.code === "ArrowLeft")     { moveFunction('moveLeft')  };
    if (e.code === "ArrowDown")     { moveFunction('moveDown')  };
    if (e.code === "ArrowRight")    { moveFunction('moveRight') };
});



















    // if (keyCode === "ArrowUp" || keyButton === 'bUp'){}
    // if (keyCode === "ArrowLeft" || keyButton === 'bLeft'){}
    // if (keyCode === "ArrowDown" || keyButton === 'bDown'){}
    // if (keyCode === "ArrowRight" || keyButton === 'bRight') {}



    //console.log(e.code);

//     let RedBlockTop = parseInt(elRedBlock.style.top);
//     let RedBlockLeft = parseInt(elRedBlock.style.left);



//     if (e.code === "ArrowUp" || e.target.className === 'bUp') { 
//         if (RedBlockTop >= RedBlockHeight) { 
//             if (RedBlockTop - PacManStepPx == GrayBlock1Top && RedBlockLeft == GrayBlock1Left)
//                 {console.log('Monstro1');}
//             else if (RedBlockTop - PacManStepPx == GrayBlock2Top && RedBlockLeft == GrayBlock2Left)
//                 {console.log('Monstro2');}
//             else
//             {
//                 elRedBlock.style.top = RedBlockTop - PacManStepPx + 'px';
//                 elPacManScin.style.transform = "rotate(270deg)";
//             }
//         }
//     }
        
//     if (e.code === "ArrowLeft" || e.target.className === 'bLeft') {
//         if (RedBlockLeft >= RedBlockWidth) { 
//             if (RedBlockTop == GrayBlock1Top && RedBlockLeft - PacManStepPx == GrayBlock1Left)
//                 {console.log('Monstro1');}
//             else if (RedBlockTop == GrayBlock2Top && RedBlockLeft - PacManStepPx == GrayBlock2Left)
//                 {console.log('Monstro2');}
//             else
//             {
//                 elRedBlock.style.left = RedBlockLeft - PacManStepPx + 'px';
//                 elPacManScin.style.transform = "scaleX(-1)";
//             }
//         }
//     }
        
//     if (e.code === "ArrowDown" || e.target.className === 'bDown') {
//         if (RedBlockTop < MainBlockHeight - PacManStepPx) { 
//             if (RedBlockTop + PacManStepPx == GrayBlock1Top && RedBlockLeft == GrayBlock1Left)
//                 {console.log('Monstro1');}
//             else if (RedBlockTop + PacManStepPx == GrayBlock2Top && RedBlockLeft == GrayBlock2Left)
//                 {console.log('Monstro2');}
//             else
//             {
//                 elRedBlock.style.top = RedBlockTop + PacManStepPx + 'px';
//                 elPacManScin.style.transform = "rotate(90deg)";
//             }
//         }
//     }
        
//     if (e.code === "ArrowRight" || e.target.className === 'bRight') {
//         if (RedBlockLeft < MainBlockWidth - PacManStepPx) { 
//             if (RedBlockTop == GrayBlock1Top && RedBlockLeft + PacManStepPx == GrayBlock1Left)
//                 {console.log('Monstro1');}
//             else if (RedBlockTop == GrayBlock2Top && RedBlockLeft + PacManStepPx == GrayBlock2Left)
//                 {console.log('Monstro2');}
//             else
//             {
//                 elRedBlock.style.left = RedBlockLeft + PacManStepPx + 'px';
//                 elPacManScin.style.transform = "scaleX(1)";
//             }
//         }
//     } 
//};


// const elMainBlock = document.querySelector('.main-block');
// const elRedBlock = document.querySelector('.red-block');
// const elGrayBlock1 = document.querySelector('.grey-block-1');
// const elGrayBlock2 = document.querySelector('.grey-block-2');

// const elPacManScin = document.querySelector('.pacman-scin');


// const RedBlockWidth = parseInt(elRedBlock.style.width);
// const RedBlockHeight = parseInt(elRedBlock.style.height);
// const GrayBlock1Top = parseInt(elGrayBlock1.style.top);
// const GrayBlock1Left = parseInt(elGrayBlock1.style.left);
// const GrayBlock2Top = parseInt(elGrayBlock2.style.top);
// const GrayBlock2Left = parseInt(elGrayBlock2.style.left);








