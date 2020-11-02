import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'Turismo de aventura no Rio de Janeiro';
const defaultKeywords = 'Turismo Rio de Janeiro pedra da gavea floreta da tijuca jeep 4x4 land rover telegrafo niteroi';
const defaultOGURL = 'http://www.adventureinrio.com.br';
const defaultOGImage = '../static/icons/logoair.png';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'Adventure In Rio'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="icon" type="image/png" href="/static/icons/favicon.ico"/>
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1016" />
    <meta property="og:image:height" content="1016" />

  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;
