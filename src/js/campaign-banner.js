const banner = document.querySelector('.campaign-banner');

if (banner) {
  const deadline = Date.parse(banner.querySelector('time').dateTime);
  const clock = banner.querySelector('.campaign-banner__clock');
  const digits = clock.querySelectorAll('b');

  const elapsed = banner.querySelector('.campaign-banner__elapsed');
  const count = elapsed.querySelector('span');
  const start = Date.parse(elapsed.dataset.start);
  const numberFormat = new Intl.NumberFormat(document.documentElement.lang);

  // Use the Brussels calendar date so all visitors see the same elapsed day.
  const brusselsDate = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Brussels',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  let timer;

  function rollDays(total) {
    if (!total || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dial = document.createElement('span');
    dial.className = 'campaign-banner__dial';
    dial.setAttribute('aria-hidden', 'true');
    const wheels = [];
    const separators = [];
    for (const character of numberFormat.format(total)) {
      if (!/\d/.test(character)) {
        const separator = document.createElement('span');
        separator.textContent = character;
        dial.append(separator);
        separators.push({separator, precedingDigits: wheels.length});
        continue;
      }
      const wheel = document.createElement('span');
      wheel.className = 'campaign-banner__wheel';
      const strip = document.createElement('span');
      strip.textContent = '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n0';
      wheel.append(strip);
      dial.append(wheel);
      wheels.push(strip);
    }

    count.classList.add('campaign-banner__count--rolling');
    count.after(dial);
    const started = performance.now();
    function advance(now) {
      if (!dial.isConnected) return;
      const progress = document.hidden
        ? 1
        : Math.min(1, Math.max(0, (now - started) / 3200));

      // Wheel speed peaks early and tapers continuously to zero.
      const remaining = (1 - progress) ** 7 * (1 + 7 * progress);
      const value = total * (1 - remaining);
      for (const {separator, precedingDigits} of separators) {
        const threshold = 10 ** (wheels.length - precedingDigits);
        separator.style.visibility = value >= threshold ? 'visible' : 'hidden';
      }
      wheels.forEach((strip, index) => {
        const place = 10 ** (wheels.length - index - 1);
        strip.parentElement.style.visibility =
          place === 1 || value > place - 1 ? 'visible' : 'hidden';
        strip.style.clipPath = place > 1 && value < place ? 'inset(1em 0 0)' : '';
        const digit = Math.floor(value / place) % 10;
        // The next wheel engages only during the last unit before a carry.
        const carry = Math.max(0, (value % place) - (place - 1));
        strip.style.transform = `translateY(-${digit + carry}em)`;
      });
      if (progress < 1) requestAnimationFrame(advance);
    }
    advance(started);
  }

  function updateClock() {
    clearTimeout(timer);
    const now = Date.now();
    const remaining = deadline - now;
    const seconds = Math.ceil(remaining / 1000);
    if (seconds <= 0) {
      banner.hidden = true;
      return;
    }

    const calendarDay = Date.parse(brusselsDate.format(now) + 'T00:00:00Z');
    const days = Math.max(0, (calendarDay - start) / 86400000);
    const formatted = numberFormat.format(days);
    if (count.textContent !== formatted) {
      const firstVisit = elapsed.hidden;
      if (!firstVisit) {
        elapsed.querySelector('.campaign-banner__dial')?.remove();
        count.classList.remove('campaign-banner__count--rolling');
      }
      count.textContent = formatted;
      elapsed.hidden = false;
      if (firstVisit) rollDays(days);
    }

    const values = [
      Math.floor(seconds / 86400),
      Math.floor(seconds / 3600) % 24,
      Math.floor(seconds / 60) % 60,
      seconds % 60
    ];
    digits.forEach((digit, index) => {
      digit.textContent = String(values[index]).padStart(2, '0');
    });
    clock.hidden = false;
    timer = setTimeout(updateClock, remaining % 1000 || 1000);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') updateClock();
  });
  window.addEventListener('pageshow', updateClock);
  updateClock();
}
