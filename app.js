// let hello = "Hello, World";
// alert(hello);


// alert(4 + 3);


// let orange = 100;
// let apple = 120;

// if(orange < apple) {
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple) {
//   alert('みかんとりんごが同じ値段');
// } else {
//   alert('みかんの値段がりんごより高い');
// }


// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// let i;
// let num = 0;

// for(i = 1; i < 11; i++) {
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// let alertString;

// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA) {
//   let addStr = "Hello" + strA;
//   return addStr;
// }


// let promptStr = prompt('何か好きな文字を入力してください');

// alert(promptStr);


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;
  
  if (js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1) {
    hand_name = 'チョキ';
  } else if(js_hand_num == 2) {
    hand_name = 'パー';
  }
  
  return hand_name;
}

function winLose(user, js){
  let winLoseStr;
  
  if(user == 'グー') {
    if(js == 'グー') {
      winLoseStr = 'あいこ';
    } else if(js == 'チョキ') {
      winLoseStr = '勝ち';
    } else if(js == 'パー') {
      winLoseStr = '負け';
    }
  } else if(user == 'チョキ') {
    if(js == 'グー') {
      winLoseStr = '負け';
    } else if(js == 'チョキ') {
      winLoseStr = 'あいこ';
    } else if(js == 'パー') {
      winLoseStr = '勝ち';
    }
  } else if(user == 'パー') {
    if(js == 'グー') {
      winLoseStr = '勝ち';
    } else if(js == 'チョキ') {
      winLoseStr = '負け';
    } else if(js == 'パー') {
      winLoseStr = 'あいこ';
    }
  }
  
  return winLoseStr;
}