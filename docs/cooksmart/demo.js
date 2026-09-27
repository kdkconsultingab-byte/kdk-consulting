(() => {
  const player = document.querySelector('.demo-player');
  if (!player) return;
  const scenes = [...player.querySelectorAll('[data-scene]')];
  const buttons = [...player.querySelectorAll('[data-step]')];
  const play = player.querySelector('#demo-play');
  const caption = player.querySelector('#demo-caption');
  const captions = ['1. Choose photos of your food.', '2. Review and edit the ingredient list.', '3. Choose from the recipe suggestions.'];
  let step = 0;
  let timer = null;
  let running = false;
  let finished = false;
  function show(index) {
    step = index;
    scenes.forEach((scene, i) => { scene.hidden = i !== index; });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    caption.textContent = captions[index];
  }
  function stop() {
    clearTimeout(timer);
    timer = null;
    running = false;
    player.classList.remove('is-playing');
    play.textContent = finished ? 'Replay demo' : 'Play demo';
  }
  function tick() {
    timer = setTimeout(() => {
      if (step === scenes.length - 1) {
        finished = true;
        stop();
        return;
      }
      show(step + 1);
      tick();
    }, 4000);
  }
  play.addEventListener('click', () => {
    if (running) { stop(); return; }
    if (finished) { show(0); finished = false; }
    running = true;
    player.classList.add('is-playing');
    play.textContent = 'Pause demo';
    tick();
  });
  buttons.forEach((button, i) => button.addEventListener('click', () => {
    finished = false;
    stop();
    show(i);
  }));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && running) stop();
  });
  player.querySelector('.demo-controls').hidden = false;
})();
