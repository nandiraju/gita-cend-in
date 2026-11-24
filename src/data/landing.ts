// AUTO-GENERATED landing markup (orbit animation + App Store / Google Play links).
// Shared by src/App.tsx (client render) and prerender-pages.json (crawler/first paint) for content parity.
// Interactivity (theme + 3D flip toggles) is pure CSS via hidden checkboxes + :has() — no JS needed.
// The orbit mixes real app screenshots (JPEG) with phone-shaped "feature" cards built from
// plain divs, so the ring advertises what the app does, not just how it looks.
/* eslint-disable */
export const landingHtml = String.raw`
  <input type="checkbox" id="theme-toggle" class="toggle-input" aria-label="Toggle dark and light mode" />
  <input type="checkbox" id="flip-toggle" class="toggle-input" aria-label="Toggle 3D flip animation" />
  <header class="site-header">
    <label for="theme-toggle" class="theme-toggle" title="Toggle light/dark mode">
      <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
      <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
      <span class="theme-toggle__track" aria-hidden="true"><span class="theme-toggle__thumb"></span></span>
    </label>
  </header>
  <section class="hero-section">
    <div class="radial-orbit" aria-hidden="true">
      <div class="radial-orbit__stage">
        <div class="radial-orbit__glow"></div>
        <div class="radial-orbit__rings">
        <div class="radial-orbit__ring radial-orbit__ring--0">
          <div class="radial-orbit__card" style="--orbit-angle:18deg;--orbit-width:104px;--orbit-height:185px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-1.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:78deg;--orbit-width:104px;--orbit-height:185px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-2.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:138deg;--orbit-width:104px;--orbit-height:185px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-3.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:198deg;--orbit-width:104px;--orbit-height:185px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-4.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:258deg;--orbit-width:104px;--orbit-height:185px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-5.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:318deg;--orbit-width:104px;--orbit-height:185px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone radial-orbit__phone--feature"><span class="radial-orbit__phone-island"></span><div class="feature-card feature-card--6"><div class="feature-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg></div><div class="feature-card__title">Daily Verse</div><div class="feature-card__sub">A shloka to reflect on each day</div></div></div>
            </div>
          </div>
        </div>
        <div class="radial-orbit__ring radial-orbit__ring--1">
          <div class="radial-orbit__card" style="--orbit-angle:8deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-1.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:59.43deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-2.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:110.86deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-3.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:162.29deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-4.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:213.71deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-5.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:265.14deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone radial-orbit__phone--feature"><span class="radial-orbit__phone-island"></span><div class="feature-card feature-card--1"><div class="feature-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"></path></svg></div><div class="feature-card__title">All 18 Chapters</div><div class="feature-card__sub">The complete Bhagavad Gita, Adhyaya 1&ndash;18</div></div></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:316.57deg;--orbit-width:120px;--orbit-height:213px;--orbit-opacity:1;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone radial-orbit__phone--feature"><span class="radial-orbit__phone-island"></span><div class="feature-card feature-card--2"><div class="feature-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></div><div class="feature-card__title">700 Verses in Telugu</div><div class="feature-card__sub">Every shloka with a Telugu translation</div></div></div>
            </div>
          </div>
        </div>
        <div class="radial-orbit__ring radial-orbit__ring--2">
          <div class="radial-orbit__card" style="--orbit-angle:14deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-1.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:59deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-2.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:104deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-3.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:149deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-4.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:194deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone"><span class="radial-orbit__phone-island"></span><img src="/images/screenshot-5.jpg" alt="" loading="eager" draggable="false" /></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:239deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone radial-orbit__phone--feature"><span class="radial-orbit__phone-island"></span><div class="feature-card feature-card--3"><div class="feature-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"></path></svg></div><div class="feature-card__title">Telugu &amp; Sanskrit</div><div class="feature-card__sub">Original shloka with word meaning</div></div></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:284deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone radial-orbit__phone--feature"><span class="radial-orbit__phone-island"></span><div class="feature-card feature-card--4"><div class="feature-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div><div class="feature-card__title">Read Offline</div><div class="feature-card__sub">Open any verse anytime, no internet</div></div></div>
            </div>
          </div>
          <div class="radial-orbit__card" style="--orbit-angle:329deg;--orbit-width:96px;--orbit-height:171px;--orbit-opacity:0.85;">
            <div class="radial-orbit__frame">
              <div class="radial-orbit__phone radial-orbit__phone--feature"><span class="radial-orbit__phone-island"></span><div class="feature-card feature-card--5"><div class="feature-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></div><div class="feature-card__title">Bookmarks</div><div class="feature-card__sub">Save verses and resume where you left</div></div></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="radial-orbit__center-shade"></div>
      <div class="radial-orbit__vignette"></div>
      <div class="radial-orbit__bottom-fade"></div>
    </div>
    <main class="hero-center">
      <div class="app-card">
        <img class="app-card__icon" src="/images/app-icon.png" width="96" height="96" alt="Telugu Gita app icon" />
        <h1 class="app-card__name">Telugu Gita</h1>
        <p class="app-card__tagline">The Shrimad Bhagavad Gita in Telugu &mdash; all 18 chapters and 700 verses, to read and reflect on anywhere.</p>
        <div class="app-card__meta"><span>Free</span><span class="app-card__dot" aria-hidden="true"></span><span>Lifestyle</span><span class="app-card__dot" aria-hidden="true"></span><span>By Srikanth Nandiraju</span></div>
        <div class="store-badges">
          <a class="store-badge" href="https://apps.apple.com/us/app/telugu-gita/id6443581899" target="_blank" rel="noopener" aria-label="Download Telugu Gita on the App Store">
            <svg class="store-badge__logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.564 12.78c-.02-2.07 1.69-3.06 1.77-3.11-.97-1.41-2.47-1.6-3-1.62-1.28-.13-2.5.75-3.15.75-.65 0-1.65-.73-2.72-.71-1.4.02-2.69.81-3.41 2.06-1.45 2.52-.37 6.25 1.04 8.3.69 1 1.51 2.12 2.58 2.08 1.04-.04 1.43-.67 2.69-.67 1.25 0 1.61.67 2.71.65 1.12-.02 1.83-1.02 2.51-2.03.79-1.16 1.11-2.28 1.13-2.34-.02-.01-2.17-.83-2.19-3.29zM15.5 6.24c.57-.69.95-1.65.85-2.61-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.59-.87 2.53.91.07 1.85-.46 2.42-1.15z"/></svg>
            <span class="store-badge__text"><small>Download on the</small><strong>App Store</strong></span>
          </a>
          <a class="store-badge" href="https://play.google.com/store/apps/details?id=nsri.apps.telugugita&hl=en_IN" target="_blank" rel="noopener" aria-label="Get Telugu Gita on Google Play">
            <svg class="store-badge__logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#00D3FF" d="M3.6 2.1c-.3.2-.5.6-.5 1.1v17.6c0 .5.2.9.5 1.1l.1.1L13 12.1v-.2L3.7 2z"/><path fill="#FFCE00" d="M16.2 15.2 13 12.1v-.2l3.2-3.1.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2z"/><path fill="#FF3A44" d="M16.3 15.1 13 11.9 3.6 21.9c.4.4 1 .4 1.7 0z"/><path fill="#00F076" d="M3.6 2.1 13 11.9l3.3-3.2L5.3 2.1c-.7-.4-1.3-.4-1.7 0z"/></svg>
            <span class="store-badge__text"><small>Get it on</small><strong>Google Play</strong></span>
          </a>
        </div>
      </div>
    </main>
  </section>
  <label for="flip-toggle" class="flip-toggle" title="Toggle 3D flip on orbiting screenshots">
    <span>3D Flip</span>
    <span class="flip-toggle__track" aria-hidden="true"><span class="flip-toggle__thumb"></span></span>
  </label>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <img src="/images/logo.svg" alt="Bhagavat Gita in Telugu logo" width="32" height="32" loading="lazy" />
        <div class="site-footer__brand-text">
          <span class="site-footer__name">Bhagavat Gita in Telugu</span>
          <span class="site-footer__copy">&copy; 2026 Bhagavat Gita in Telugu. All rights reserved.</span>
        </div>
      </div>
      <nav class="site-footer__links" aria-label="Footer">
        <a href="/">Home</a>
        <a href="https://apps.apple.com/us/app/telugu-gita/id6443581899" target="_blank" rel="noopener">App Store</a>
        <a href="https://play.google.com/store/apps/details?id=nsri.apps.telugugita&hl=en_IN" target="_blank" rel="noopener">Google Play</a>
      </nav>
    </div>
    <div class="site-footer__credits">
      <p>Bhagavat Gita in Telugu app &amp; website designed and developed by <a href="https://srikanth.nandiraju.com/" target="_blank" rel="author noopener">Srikanth Nandiraju</a> <span aria-hidden="true">&middot;</span> <a href="https://ai.nandiraju.com/" target="_blank" rel="noopener">Talk to the digital twin of Srikanth Nandiraju</a></p>
    </div>
  </footer>`;
