let clothing = 0, eating = 1, health = 2,
    communication = 3, rules = 4, life_main_img = 5, life_rules_img = 6, webcam_img = 7;
let quelist = [false, false, false, false, false,
    false, false, false, false, false]
let complate_chek = [false, false, false, false, false,
    false, false, false, false, false]

let check_yes = [
    document.getElementById("yes_0_0"),
    document.getElementById("yes_0_1"),
    document.getElementById("yes_0_2"),
    document.getElementById("yes_0_3"),
    document.getElementById("yes_0_4"),
    document.getElementById("yes_0_5"),
    document.getElementById("yes_0_6"),
    document.getElementById("yes_0_7"),
    document.getElementById("yes_0_8"),
    document.getElementById("yes_0_9")
]
let check_no = [
    document.getElementById("no_0_0"),
    document.getElementById("no_0_1"),
    document.getElementById("no_0_2"),
    document.getElementById("no_0_3"),
    document.getElementById("no_0_4"),
    document.getElementById("no_0_5"),
    document.getElementById("no_0_6"),
    document.getElementById("no_0_7"),
    document.getElementById("no_0_8"),
    document.getElementById("no_0_9")
]
let life_item = [
    document.getElementById("clothing"),
    document.getElementById("eating"),
    document.getElementById("health"),
    document.getElementById("communication"),
    document.getElementById("rules"),
    document.getElementById("life_main_img"),
    document.getElementById("life_rules_img"),
    document.getElementById("life_webcam_container")
]
function init() {
    life_item[life_rules_img].style.display = "none";
    document.getElementById("checklist_compalate").style.display = "none";
    life_item[webcam_img].style.display = "none";
}
init();
// 클릭이미지 변경
function flag_life_contents(num) {
    switch (num) {
        case 0:
            life_item[clothing].src = "images/last/web10_1_2.png";
            page_change_flag_fun(0);
            webcam_select("teacherble/dress/" , num);
            break;
        case 1:
            life_item[eating].src = "images/last/web10_2_2.png";
            page_change_flag_fun(1);
            webcam_select("teacherble/food/" , num);
            break;
        case 2:
            life_item[health].src = "images/last/web10_3_2.png";
            page_change_flag_fun(2);
            webcam_select("teacherble/traning/" , num);
            break;
        case 3:
            life_item[communication].src = "images/last/web10_4_2.png";
            page_change_flag_fun(3);
            webcam_select("teacherble/face/" , num);
            break;
        case 4:
            life_item[rules].src = "images/last/web10_5_2.png";
            page_change_flag_fun(4);
            break;
    }
}
function checklist_check(num, str, _color) {
    switch (num) {// check유무
        case 0:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 1:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 2:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 3:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 4:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 5:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 6:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 7:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 8:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 9:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
    }
    complate_check();
}
function complate_check() { // 마지막 검사 확인 함수
    var result = 0;
    if (complate_chek[0] == true && complate_chek[1] == true && complate_chek[2] == true && complate_chek[3] == true && complate_chek[4] == true &&
        complate_chek[5] == true && complate_chek[6] == true && complate_chek[7] == true && complate_chek[8] == true && complate_chek[9] == true) {
        for (i = 0; i < quelist.length; i++) {
            if (quelist[i] == true) {
                result++;
                if (result >= 6) {
                    life_item[life_rules_img].style.display = "none";
                    document.getElementById("checklist_compalate").style.display = "block";
                    document.getElementById("com_txt_yes").style.display = "block";
                    document.getElementById("com_txt_no").style.display = "none";
                }
                else {
                    life_item[life_rules_img].style.display = "none";
                    document.getElementById("checklist_compalate").style.display = "block";
                    document.getElementById("com_txt_yes").style.display = "none";
                    document.getElementById("com_txt_no").style.display = "block";
                }
            }
        }
    }
}
function page_change_flag_fun(num) { //생활배움에서 버튼을 클릭 했을때
    if (num == 0 || num == 1 ||
        num == 2 || num == 3) {
        setTimeout(() => {
            life_item[life_main_img].style.display = "none";
            life_item[webcam_img].style.display = "block";
        }, 500);
    }
    else if (num == 4) {
        setTimeout(() => {
            life_item[life_main_img].style.display = "none";
            life_item[life_rules_img].style.display = "block";
        }, 500);
    }
}
// 티처블 머신 동작 함수
function webcam_select(_url , num) {
    const URL = _url;
    let model, webcam, labelContainer, maxPredictions;
    async function init_webcam() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(window.innerWidth / 3, window.innerHeight / 3, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict(num);
        window.requestAnimationFrame(loop);
    }
    async function predict(_num) {
        if(_num == 0){// 옷차림
            document.getElementById("webcam_main_txt").innerHTML = "계절/날씨에 어울리는 옷차림.";
            const prediction = await model.predict(webcam.canvas);
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                // labelContainer.childNodes[i].innerHTML = classPrediction;
                if (prediction[i].className == "비 오는 날" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "비 오는 날";
    
                }
                else if (prediction[i].className == "봄 +가을 옷차림" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "봄 +가을 옷차림";
    
                }
                else if (prediction[i].className == "여름 옷차림" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "여름 옷차림";
    
                }
                else if (prediction[i].className == "겨울 옷차림" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "겨울 옷차림";
    
                }
                else{
                    labelContainer.childNodes[i].innerText = "";
                }
            }
        }
        else if(_num == 1){
            document.getElementById("webcam_main_txt").innerHTML = "좋은 음식과 해로운 음식 구별하기.";
            document.getElementById("webcam_main_txt").style.marginLeft = "17.5%";

            const prediction = await model.predict(webcam.canvas);
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                // labelContainer.childNodes[i].innerHTML = classPrediction;
                if (prediction[i].className == "해로운음식" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "해로운음식";
                }
                else if (prediction[i].className == "좋은음식" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "좋은음식";
                }
                else if (prediction[i].className == "음식을 보여주세요" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "음식을 보여주세요";
                }
                else{
                    labelContainer.childNodes[i].innerText = "";
                }
            }
        }
        else if(_num == 2){
            document.getElementById("webcam_main_txt").innerHTML = "몸을 튼튼하게 해보아요.";
            document.getElementById("webcam_main_txt").style.marginLeft = "27%";

            const prediction = await model.predict(webcam.canvas);
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                // labelContainer.childNodes[i].innerHTML = classPrediction;
                if (prediction[i].className == "제자리" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "제자리";
                }
                else if (prediction[i].className == "런지" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "런지";
                }
                else if (prediction[i].className == "런지운동을 해볼까요?" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "런지운동을 해볼까요?";
                }
                else if (prediction[i].className == "힘을 내세요" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "힘을 내세요";
                }
                else{
                    labelContainer.childNodes[i].innerText = "";
                }
            }
        }
        else if(_num == 3){
            document.getElementById("webcam_main_txt").innerHTML = "얼굴표정으로 나의 마음을 표현해 보아요.";
            document.getElementById("webcam_main_txt").style.fontSize = "3.3vw";
            document.getElementById("webcam_main_txt").style.marginLeft = "17.5%";

            const prediction = await model.predict(webcam.canvas);
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                // labelContainer.childNodes[i].innerHTML = classPrediction;
                if (prediction[i].className == "슬픈표정" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "슬픈표정";
                }
                else if (prediction[i].className == "웃는표정" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "웃는표정";
                }
                else if (prediction[i].className == "놀란표정" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "놀란표정";
                }
                else if (prediction[i].className == "표정을 지어주세요" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "표정을\n지어주세요";
                }
                else if (prediction[i].className == "마스크를 벗어 주세요" && prediction[i].probability.toFixed(2) == 1.00) {
                    labelContainer.childNodes[i].innerText = "마스크를 벗어 주세요";
                }
                else{
                    labelContainer.childNodes[i].innerText = "";
                }
            }
        }
    }
    init_webcam();
}