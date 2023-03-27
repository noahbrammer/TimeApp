const t = TrelloPowerUp.iframe();

const startTimer = function (t) {
  // ...
};

const stopTimer = function (t) {
  // ...
};

t.render(async function () {
  const context = await t.getContext();
  const pluginData = await t.getAll();

  if (pluginData.board.shared.timerRunning) {
    t.set('card', 'button', 'Stop Timer', stopTimer, true);
  } else {
    t.set('card', 'button', 'Start Timer', startTimer, true);
  }

  return t.sizeTo('#content').done();
});
