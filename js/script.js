/*date*/
var now = new Date;
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var day = now.getDay();
var days = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"]

function showDate(){
  var today = year + "." + month + "." + date + " (" + days[day] + ")";
  var dateElement = document.querySelector("#date > p");
  dateElement.innerHTML = dateElement.innerHTML + "<b>" + today + "</b>";
  dateElement.style.fontSize = "20px";
}

showDate();

/*quote*/
const Quote = [
  "인생은 속도가 아니라 방향이다. - 마하트마 간디",
  "할 수 있다고 믿는 사람만이 결국 해낸다. - 헨리 포드",
  "기회는 일어나는 것이 아니라 만들어지는 것이다. - 크리스 그로서",
  "성공은 결과가 아니라 과정이다. - 알버트 아인슈타인",
  "가장 어두운 순간에 별은 가장 밝게 빛난다. - 찰리 채플린",
  "내일은 오늘보다 더 나은 날이 될 것이다. - 앤드류 매튜스",
  "위대한 일은 결코 손쉬운 길로 이루어지지 않는다. - 넬슨 만델라",
  "작은 변화들이 큰 차이를 만든다. - 마이클 조던",
  "당신이 할 수 있다고 믿는 순간, 이미 반은 성공한 것이다. - 시어도어 루즈벨트",
  "우리는 우리가 반복하는 것들이다. - 아리스토텔레스",
  "자신을 믿어라, 그게 첫 번째 단계다. - 헬렌 켈러",
  "지금 하는 일이 바로 내일의 성공을 만든다. - 토니 로빈스"
];

const quote = document.querySelector("#quote > p");
const randomQuote = Quote[Math.floor(Math.random() * Quote.length)];
quote.innerHTML = "<b>" + randomQuote + "</b>";

/*todoList*/
document.getElementById("todayInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var inputValue = document.getElementById("todayInput").value;
    var li = document.createElement("li");
    li.style.listStyleType = "none";
    li.innerHTML = "<span class='icon'>❄️</span> <span class='text'>" + inputValue + "</span>";
    document.getElementById("todayList").appendChild(li);
    document.getElementById("todayInput").value = "";
  }
});

document.getElementById("weeklyInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var inputValue = document.getElementById("weeklyInput").value;
    var li = document.createElement("li");
    li.style.listStyleType = "none";
    li.innerHTML = "<span class='icon'>❄️</span> <span class='text'>" + inputValue + "</span>";
    document.getElementById("weeklyList").appendChild(li);
    document.getElementById("weeklyInput").value = "";
  }
});

document.getElementById("monthlyInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var inputValue = document.getElementById("monthlyInput").value;
    i.innerHTML = "<span class='icon'>❄️</span> <span class='text'>" + inputValue + "</span>";
    var li = document.createElement("li");
    li.style.listStyleType = "none";
    li.innerHTML = "<span class='icon'>❄️</span> <span class='text'>" + inputValue + "</span>";
    document.getElementById("monthlyList").appendChild(li);
    document.getElementById("monthlyInput").value = "";
  }
});


document.getElementById("todayList").addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("icon")) {
    var li = event.target.parentElement;
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "black";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "#ccc";
    }
  }
});
document.getElementById("weeklyList").addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("icon")) {
    var li = event.target.parentElement;
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "black";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "#ccc";
    }
  }
});
document.getElementById("monthlyList").addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("icon")) {
    var li = event.target.parentElement;
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "black";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "#ccc";
    }
  }
});