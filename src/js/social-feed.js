import { Init as MastodonInit } from '@idotj/mastodon-embed-timeline';

(() => {
  new MastodonInit({
    instanceUrl: 'https://mastodon.social',
    timelineType: 'profile',
    userId: '109324858510274091',
    profileName: '@owa',
    defaultTheme: 'light',
    hideReplies: true,
    hideReblog: true,
    insistSearchContainer: true,
  });

  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const panels = document.querySelector('.panels');
  if (!panels) return;

  tablist
    .querySelector('[data-social-tab="bluesky"]')
    .addEventListener('click', () => import('bluesky-profile-feed-embed'), { once: true });

  for (const tab of tablist.children) {
    tab.addEventListener('click', () => {
      const feedId = tab.dataset.socialTab;

      for (const panel of panels.children) {
        panel.hidden = panel.dataset.socialPanel !== feedId;
      }
      for (const t of tablist.children) {
        t.ariaSelected = t === tab;
      }
    });
  }
})();
