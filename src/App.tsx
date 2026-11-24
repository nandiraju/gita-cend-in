import { landingHtml } from './data/landing';

// The landing page (radial orbit of app screenshots + center App Store / Google Play
// card) is static markup shared with the prerender manifest, so crawlers and the
// client render identical HTML. Theme + 3D-flip toggles are handled entirely in CSS.
export function App() {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}

export default App;
