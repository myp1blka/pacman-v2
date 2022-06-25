

//   --------------------------------------------------------------////////////////////-----------------------------------------

const elStartGameButton = document.querySelector('input[name="bStartGame"]'); // стартова кнопка
const elMainBlock = document.querySelector('.main-block'); // Основний блок в який все буде генеруватись

    // Кнопки
    const elButtonUp = document.querySelector('input[name="bUp"]');
    const elButtonLeft = document.querySelector('input[name="bLeft"]');
    const elButtonDown = document.querySelector('input[name="bDown"]');
    const elButtonRight = document.querySelector('input[name="bRight"]');
    
    const elPlayingFieldWidth = document.querySelector('input[name="playing-field-width"]');// Ширина ігрового поля
    const elPlayingFieldHeight = document.querySelector('input[name="playing-field-height"]');// Висота ігрового поля
    const elNumberOfMonsters = document.querySelector('input[name="number-of-monsters"]');// Кількість монстрів

    // Розмір істоти
const CreatureWidth = 100;
const CreatureHeight = 100;
    // Розмір ПакМана прирівнюємо до розміру інших істот
const PacManWidth = CreatureWidth;
const PacManHeight = CreatureHeight;

var PacManScin='scaleX(1)';

let playFieldWidth; // попередньо оголошуємо змінну ширини
let playFieldHeight;// попередньо оголошуємо змінну висоти

let numberOfMonsters; // +2 PacMan and FinishPoint

let gameStarted = 0; // Чи вже запущена гра
let creaturesArr = []; // Масив істот

//   --------------------------------------------------------------////////////////////-----------------------------------------

const StartGameFunction = (e) => {

    // Отримуємо дані які ввів користувач з елементів
    playFieldWidth = parseInt( elPlayingFieldWidth.value );
    playFieldHeight =  parseInt( elPlayingFieldHeight.value );
    numberOfMonsters =  parseInt( elNumberOfMonsters.value );
        
    createCreatures(); // наповнюємо масив істотами
    drawPlayingFieldFunction(); // вимальовуємо все в ХТМЛ
    gameStarted = 1; // ставим мітку що вже можна грати
    console.log('New game Started ####################################################################################################')
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const drawPlayingFieldFunction = () => {
    
    let ResultHTML = ''; // очистити накопичувальну змінну
        elMainBlock.innerHTML = ''; // очистити основний блок дів
        elMainBlock.insertAdjacentHTML('beforeend', ' Let\'s Play ' + playFieldWidth + 'x' + playFieldHeight);

    // Малюємо ігрове поле
        elMainBlock.insertAdjacentHTML('beforeend',
            `    <div class="playField" style="position: absolute; top:10px; left:200px;
            width: ${playFieldWidth}px; height: ${playFieldHeight}px;border:1px solid black;"></div>`);
        
    // Отримуємо новостворений блок ігрового поля   
        const elPlayFieldBlock = document.querySelector('.playField');
    
    // Наповнюємо живністю
    for (let i = 1; i <= (numberOfMonsters); i++) {
        ResultHTML += `     <div class="grey-block-${i}" style="position: absolute; top:${creaturesArr[i][1]}px; left:${creaturesArr[i][0]}px; 
        width:${CreatureWidth}px;height:${CreatureHeight}px;border:0px solid red;">
            <img src="img/Blinky${ randXY(1, 2, 1) }.png" alt="monster${i}:${creaturesArr[i][0]}x${creaturesArr[i][1]}" width="100%">
        </div>`
    }

    // Домальовуємо ПакМана
        ResultHTML += `     <div class="green-block" style="position: absolute;
         top:${creaturesArr[numberOfMonsters + 1][1]}px; left: ${creaturesArr[numberOfMonsters + 1][0]}px;
        width:${CreatureWidth}px;height:${CreatureHeight}px;border:0px solid red;">
            <img src="img/kolo.png" alt="monster2" width="100%">
        </div>`;
    
    // Домальовуємо мітку фінішу    
        ResultHTML += `     <div class="red-block" style="position: absolute; transform:${PacManScin}; top:${creaturesArr[0][1]}px; left: ${creaturesArr[0][0]}px; 
        width:${PacManWidth}px;height:${PacManHeight}px;border:0px solid red;">
            <img src="img/pacman.png" class="pacman-scin" alt="pac-man:${creaturesArr[0][1]}x${creaturesArr[0][1]}" width="100%">
        </div>`;

    // Вставляємо наші художності в основний блок
    elPlayFieldBlock.insertAdjacentHTML('beforeend', ResultHTML);
       
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const createCreatures = () => {
    creaturesArr.length = []; // Очистимо масив з живністю
    // Масив [i] [x, y]
    // 0 - пакман, i - монстри, numberOfMonsters+1 - мітка фінішу 

    for (let i = 0; i <= (numberOfMonsters + 1); i++) {
        creaturesArr.push(new Array()); // Додаємо масив(x,y) в масив
        let creX;
        let creY;
        let extremalExit=10; // скільки невдач порахувати перед аварійним завершенням, щоб не було зацикленості

        do
        {
            creX = randXY(0, playFieldWidth, CreatureWidth); // рандомній X  (від, до, кратно чому)
            creY = randXY(0, playFieldHeight, CreatureHeight); // рандомній Y  (від, до, кратно чому)

            // Аварійний вихід про всяк випадок
            extremalExit -= 1; if (extremalExit===0){break}

        } while ((collisionCheckFunction(creX, creY) != -1) || (extremalExit=0))
        
        creaturesArr[i].push (creX); // Додаємо X координату істоти
        creaturesArr[i].push (creY); // Додаємо Y координату істоти
        
        console.log('CREATE Creature ' + i + ' [ x = ' + creaturesArr[i][0] + ' y = ' + creaturesArr[i][1] + ' ] ');
        
    }
}


//   --------------------------------------------------------------////////////////////-----------------------------------------

const collisionCheckFunction = (x, y) => {
    // Якщо все добре, повертає '-1' , а якщо знаходить співпадіння, повертає номер з масиву з ким співпали координати
    if (x >= 0 && y >= 0) // Чи нормальні цілі числа на вході
    {
        let collisionDetected = -1; // Оголошуєму змінну індикатор зіткнень
        if (
            (x >= 0 && y >= 0) && // Чи не вилазимо за верхню або ліву грань
            (x <= (playFieldWidth - CreatureWidth) && y <= (playFieldHeight - CreatureHeight)) // чи не вилазимо праву або нижню грань
            )
        {
            for (let i = 0; i <= creaturesArr.length-1 ; i++) {
                // Циклом перевіряємо координати всіх істот на предмет співпадіння
                if (x === (creaturesArr[i][0]) && y === (creaturesArr[i][1]))
                {
                    collisionDetected = i; // Якщо співпадіння було, записуємо у змінну номер в масиві з ким співпадіння
                }
                else {} // в іншому випадку все добре, нічого не робимо
            }
            // якщо було співпадіння, функція повертає номер співпадіння, якщо ні то '-1' типу все ОК
            if (collisionDetected > -1) { return collisionDetected } else  { return -1 }
        }
    }
}

//   --------------------------------------------------------------////////////////////-----------------------------------------

const moveFunction = (moveDirection) => { 
    let checkColis; // сюди будем писати стан перешкоди
    if (gameStarted === 1) {// якщо гра почалась, можемо рухатись
        //console.log(elPacManScin);
        if (moveDirection === "moveUp") {       // Перевірити чи не на перешкоди ми збираємось рухатись
            checkColis = collisionCheckFunction(creaturesArr[0][0], creaturesArr[0][1] - PacManHeight)
            PacManScin = 'rotate(270deg)'; // Повертати ПакМана туди куди він прямує
            if (checkColis === numberOfMonsters+1){ // Потрапили на клітку фініш
                console.log("!!!!!!!!!!!!!!!!!!!!!   YOU WIN   !!!!!!!!!!!!!!!!!!!!!");
                alert('YOU WIN !!!');
            }
            if (checkColis === -1 || checkColis === numberOfMonsters+1)// якщо перешкод немає, або це мітка фініш, рухаємось
                {creaturesArr[0][1] -= PacManHeight} // Рухаємо ПакМана
            else if (checkColis != numberOfMonsters+1) // перевіримо чи не з фінішем ми зіткнулися
            {       //  Перевіримо чи можна здвинути перешкоду на шляху у ПакМана
                    if (collisionCheckFunction(creaturesArr[checkColis][0], creaturesArr[checkColis][1] - PacManHeight) === -1)
                {   // Якщо все добре, здвигаємо перешкоду і заразом і ПакМана
                    creaturesArr[checkColis][1] -= PacManHeight;
                    creaturesArr[0][1] -= PacManHeight;
                }
            }
        }
        if (moveDirection === "moveLeft") {
            checkColis = collisionCheckFunction(creaturesArr[0][0] - PacManWidth, creaturesArr[0][1])
            PacManScin = 'scaleX(-1)';
            if (checkColis === numberOfMonsters+1){
                console.log("!!!!!!!!!!!!!!!!!!!!!   YOU WIN   !!!!!!!!!!!!!!!!!!!!!");
                alert('YOU WIN !!!');
            }
            if (checkColis === -1 || checkColis === numberOfMonsters+1)
                {creaturesArr[0][0] -= PacManWidth}
            else if (checkColis != numberOfMonsters+1) 
            {
                if (collisionCheckFunction(creaturesArr[checkColis][0] - PacManWidth, creaturesArr[checkColis][1]) === -1)
                {
                    creaturesArr[checkColis][0] -= PacManWidth;
                    creaturesArr[0][0] -= PacManWidth;
                }
            }
        }
        if (moveDirection === "moveDown") {
            checkColis = collisionCheckFunction(creaturesArr[0][0], creaturesArr[0][1] + PacManHeight)
            PacManScin = 'rotate(90deg)';
            if (checkColis === numberOfMonsters+1){
                console.log("!!!!!!!!!!!!!!!!!!!!!   YOU WIN   !!!!!!!!!!!!!!!!!!!!!");
                alert('YOU WIN !!!');
            }
            if (checkColis === -1 || checkColis === numberOfMonsters+1)
                {creaturesArr[0][1] += PacManHeight}
            else if (checkColis != numberOfMonsters+1) 
            {
                if (collisionCheckFunction(creaturesArr[checkColis][0], creaturesArr[checkColis][1] + PacManHeight) === -1)
                {
                    creaturesArr[checkColis][1] += PacManHeight;
                    creaturesArr[0][1] += PacManHeight;
                }
            }
        }
        if (moveDirection === "moveRight") {
            checkColis = collisionCheckFunction(creaturesArr[0][0] + PacManWidth, creaturesArr[0][1])
            PacManScin = 'scaleX(1)';
            if (checkColis === numberOfMonsters+1){
                console.log("!!!!!!!!!!!!!!!!!!!!!   YOU WIN   !!!!!!!!!!!!!!!!!!!!!");
                alert('YOU WIN !!!');
            }
            if (checkColis === -1 || checkColis === numberOfMonsters+1)
                {creaturesArr[0][0] += PacManWidth}
            else if (checkColis != numberOfMonsters+1) 
            {
                if (collisionCheckFunction(creaturesArr[checkColis][0] + PacManWidth, creaturesArr[checkColis][1])=== -1)
                {
                    creaturesArr[checkColis][0] += PacManWidth;
                    creaturesArr[0][0] += PacManWidth;
                }
            }
        }
        drawPlayingFieldFunction();
        console.log(moveDirection + "    PacMan position [" + creaturesArr[0][0] + ", " + creaturesArr[0][1] + "]");
    }
    else { console.log('Please start the game'); }
}

//   --------------------------------------------------------------////////////////////-----------------------------------------
// Рандомна функція (від, до, кратна чому)
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







