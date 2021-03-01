// const daysRef = document.querySelector(".value[data-value='days']");
// const hoursRef = document.querySelector(".value[data-value='hours']");
// const minsRef = document.querySelector(".value[data-value='mins']");
// const secsRef = document.querySelector(".value[data-value='secs']");

// console.log(daysRef);
// console.log(hoursRef);
// console.log(minsRef);
// console.log(secsRef);

// const countdown = {
//   start() {
//     setInterval(() => {
//       const targetDate = new Date("Mar 7, 2021");
//       const targetTime = targetDate.getTime();
//       const currentTime = Date.now();
//       const deltaTime = targetTime - currentTime;
//       // console.log(targetTime);
//       // console.log(currentTime);
//       // console.log(deltaTime);

//       const time = getTimeComponents(deltaTime);
//       console.log(time);

//       updateCountdown(time);
//     }, 1000);
//   },
// };

// countdown.start();

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

// function updateCountdown({ days, hours, mins, secs }) {
//   daysRef.textContent = `${days}`;
//   hoursRef.textContent = `${hours}`;
//   minsRef.textContent = `${mins}`;
//   secsRef.textContent = `${secs}`;
// }




/////////// ClASS

class CountdownTimer {
  constructor({ selector, targetDate }) {
    // this.intervalId = null;
    // this.isActive = false;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    // this.isActive = true;

     setInterval(() => {
      const targetDate1 = new Date(this.targetDate);
      const targetTime = targetDate1.getTime();
      const currentTime = Date.now();
      const deltaTime = targetTime - currentTime;
      const time = this.getTimeComponents(deltaTime);
      //       console.log(time);

    //   updateCountdown(time)
     }, 1000);
      
     
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}



function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown({ days, hours, mins, secs }) {
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`;
}


const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
console.log(timer);

timer.start();
console.log(timer.start());
console.log(timer.getTimeComponents());