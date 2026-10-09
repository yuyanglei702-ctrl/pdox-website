import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { getSiteMetadata, publicRoutes } from './lib/site-metadata';

export { getSiteMetadata, publicRoutes };
export function render(path: string) {
  return renderToString(<StaticRouter location={path}><App /></StaticRouter>);
}
