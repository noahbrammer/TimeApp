const t = TrelloPowerUp.iframe();

window.startTimer = async function (t) {
  const startTime = Date.now();
  await t.set('card', 'shared', 'startTime', startTime);
  await t.set('card', 'shared', 'timerRunning', true);
  t.render();
};

window.stopTimer = async function (t) {
  const startTime = await t.get('card', 'shared', 'startTime');
  const totalTime = await t.get('card', 'shared', 'totalTime', 0);
  const elapsedTime = Date.now() - startTime;
  const newTotalTime = totalTime + elapsedTime;

  await t.set('card', 'shared', 'totalTime', newTotalTime);
  await t.set('card', 'shared', 'timerRunning', false);
  t.render();
};
