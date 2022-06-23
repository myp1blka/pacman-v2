// Отримуємо початкові потрібні елементи
    // Основний блок який будемо наповнювати
const elMainBlock = document.querySelector('.main-block');
    // Основний блок який будемо наповнювати
const elStartGameButton = document.querySelector('input[name="bStartGame"]');
    // Кнопки
const elButtonUp = document.querySelector('input[name="bUp"]');
const elButtonLeft = document.querySelector('input[name="bLeft"]');
const elButtonDown = document.querySelector('input[name="bDown"]');
const elButtonRight = document.querySelector('input[name="bRight"]');
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





const StartGame = (e) => {
    let keyCode = e.code;
    let keyButton = e.target.name;

    console.log('keyCodeS ' + keyCode + ' - ' + keyButton);
    
    if (keyCode === "Enter" || keyButton === 'bStartGame') {
        drawPlayingFieldFunction();

        keyCode = '';
        keyButton = '';
        console.log('keyCodeS Clear  ' + keyCode + ' - ' +  keyButton);

    }
    else {
        moveFunction(keyCode, keyButton);
        keyCode = '';
        keyButton = '';
        console.log('exitMoveFunction ' + keyCode + ' - ' +  keyButton);
    }
}

const moveFunction = (a, b) => { 
    console.log('MOVE ' + a + ' - ' +  b);
}
const drawPlayingFieldFunction = () => { 
    elMainBlock.insertAdjacentHTML('beforeend', ' Let\'s Play ' + playFieldWidth + 'x' + playFieldHeight);
}




const collisionСheckFunction = () => {
    console.log("Cheked");
}




elButtonUp.addEventListener('click', StartGame);
elButtonLeft.addEventListener('click', StartGame);
elButtonDown.addEventListener('click', StartGame);
elButtonRight.addEventListener('click', StartGame);

elStartGameButton.addEventListener('click', StartGame);

document.addEventListener("keydown", StartGame);






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








