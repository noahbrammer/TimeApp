const t = TrelloPowerUp.iframe();

const startTimer = async function (t) {
  const startTime = Date.now();
  await t.set('card', 'shared', 'startTime', startTime);
  await t.set('card', 'shared', 'timerRunning', true);
  t.render();
};

const stopTimer = async function (t) {
  const startTime = await t.get('card', 'shared', 'startTime');
  const totalTime = await t.get('card', 'shared', 'totalTime', 0);
  const elapsedTime = Date.now() - startTime;
  const newTotalTime = totalTime + elapsedTime;

  await t.set('card', 'shared', 'totalTime', newTotalTime);
  await t.set('card', 'shared', 'timerRunning', false);
  t.render();
};

TrelloPowerUp.initialize({
  'card-buttons': async function (t, options) {
    const timerRunning = await t.get('card', 'shared', 'timerRunning', false);
    if (timerRunning) {
      return [{
        icon: './icon.png',
        text: 'Stop Timer',
        callback: stopTimer
      }];
    } else {
      return [{
        icon: './icon.png',
        text: 'Start Timer',
        callback: startTimer
      }];
    }
  }
});
