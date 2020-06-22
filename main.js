class CountdownTimer {
  constructor(options) {
    this.selector = options.selector,
      this.targetDate = new Date(options.targetDate)
  };
};


const options = {
  selector: '#timer-1',
  targetDate: 'Jul 17, 2020'
};
const realTimer = new CountdownTimer(options);
const elementTimer = document.querySelector(realTimer.selector);
const showTimer = function () {
  const timerID = setInterval(() => {
      const currentDate = new Date();
      const time = realTimer.targetDate.getTime() - currentDate.getTime();
      const timerComp = new Array(4);
      timerComp[0] = Math.floor(time / (1000 * 60 * 60 * 24));
      timerComp[1] = ("0" + Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
      timerComp[2] = ("0" + Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
      timerComp[3] = ("0" + Math.floor((time % (1000 * 60)) / 1000)).slice(-2);
      timerComp.map((e, i) => elementTimer.children[i].children[0].textContent = e);
    },
    1000);
};
showTimer();