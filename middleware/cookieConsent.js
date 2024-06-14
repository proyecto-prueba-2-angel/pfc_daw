export default function ({ app }) {
  const cookieConsent = app.$cookies.get('cookie_consent');
  if(!cookieConsent) {
    app.$cookies.set('cookie_consent', 'accepted', { expires: 365 });
  }
}
