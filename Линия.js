function createLap() {                                     // Cсоздает строительную длинну
   const line = document.getElementById("line2")
   const sectionCr = document.createElement("section");
   const lastId = Array.from(line.children);               // Cоздание массива из коллекции
   id = lastId.length++;
   sectionCr.id = "section_" + id;
   line.appendChild(sectionCr);


   const pylonBtn = document.createElement("button");
   pylonBtn.className = "btn";
   pylonBtn.id = "pylon_" + id + "_btn";
   pylonBtn.innerText = "Создать опору ЛЭП";
   pylonBtn.onclick = createPylon;
   sectionCr.appendChild(pylonBtn);
};

function createPylon() {                                     // Создает опору в нутри строительной длинны

   result = prompt("Номер опоры", " ");                      // Номер опоры. Простое положительное число
   if (typeof (result) === "number" || result > 0) {
   } else result(alert("Вы ввели не правильный номер"));
   number = result;

   const thisElem = document.getElementById(this.id);
   const id = thisElem.parentElement.id;
   const Lap = document.getElementById(id);
   const divCr = document.createElement('div');
   divCr.number = "M-" + number;
   const idLapCh = Array.from(Lap.children);
   const idLap = idLapCh.length++
   divCr.id = "Lap_" + idLap + "_" + id;
   divCr.className = "whiteDiv";
   Lap.appendChild(divCr);

   const nameCreatePylon = document.createElement('h2');      // Номер опоры
   nameCreatePylon.innerText = divCr.number;
   divCr.appendChild(nameCreatePylon);

   const button = document.createElement('button');           // Кнопка СВАРЕНА
   button.name = 'button';
   button.id = "button_" + divCr.id;
   button.className = "btn";
   button.innerText = 'Сварена';
   divCr.appendChild(button);

   const button1 = document.createElement('button');          // Кнопка ЗАВЕШЕНА
   button1.name = 'button1';
   button1.id = "button1_" + divCr.id;
   button1.className = "btn";
   button1.innerText = 'Завешена';
   divCr.appendChild(button1);

   let colorButton1 = document.getElementById(button.id);     // Изменение цвета кнопки на зеленый при ее нажатии
   colorButton1.onclick = function () {
      (colorButton1.classList == "btn") ? colorButton1.classList = "btnGreen" :
         (colorButton2.classList == "btnGreen") ? colorButton1.classList = "btnGreen" : colorButton1.classList = "btn"
   };

   let colorButton2 = document.getElementById(button1.id);    // Изменение цвета кнопки на зеленый при ее нажатии с условием если первая кнопка зеленого цвета
   colorButton2.onclick = function () {
      (colorButton2.classList == "btn" && colorButton1.classList == "btnGreen") ? colorButton2.classList = "btnGreen" : colorButton2.classList = "btn";
   };

   let chengeColorDiv = document.getElementById(divCr.id);    // Если обе кнопки зеленого цвета то блок окрашеваеться в зеленый цвет
   chengeColorDiv.onclick = function () {
      (colorButton2.classList == "btnGreen") ? chengeColorDiv.classList = "greenDiv" : chengeColorDiv.classList = "whiteDiv";
   };

   // let alertDiv = document.getElementById(divCr.id);
   // alertDiv.onclick = function () {
   //    alert("Опора № " + number + "\n" + "до предидущей муфты - " + lenghtLeft + "\n" + "до следующей муфты - " + " " + lenghtRihte)
   // };
};

