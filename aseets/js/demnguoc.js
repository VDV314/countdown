function DemNguoc(){
    var ful = new Date("jan 1,2023 00:00:00").getTime();
    var x = setInterval(function () {
      var noW = new Date().getTime();
      var distance = ful - noW;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance / (1000 * 60 * 60));
      var minutes = Math.floor(distance / (1000 * 60));
      var seconds = Math.floor(distance / 1000);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demnguoc").innerHTML =
          "Chúc mọi người có: 1 Bầu trời sức khỏe. 1 Biển cả tình thương. 1 Đại dương tình bạn. 1 Điệp khúc tình yêu. 1 Người yêu chung thủy. 1 Sự nghiệp sáng ngời. 1 Gia đình thịnh vượng. Chúc năm mới Vạn sự như ý, Tỉ sự như mơ, Triệu triệu bất ngờ, Không chờ cũng đến!";
      }
    }, 1000);
     
}

function addDemNguoc(){
    document.write(`
     <div id="demnguoc">
        <div class="item">
      <p>DAYS</p>
      <span id="days">Days</span>
    </div>
    <div class="item">
      <p>HOURS</p>
      <span id="hours">Hours</span>
    </div>
    <div class="item">
      <p>MINUTES</p>
      <span id="minutes">Minutes</span>
    </div>
    <div class="item">
      <p>SECONDS</p>
      <span id="seconds">Seconds</span>
    </div>
    </div>
    `);
}

function addBanPhao(){
    document.write(`<div id="BanPhao"></div>`);
}

addDemNguoc();
DemNguoc();
addBanPhao();

