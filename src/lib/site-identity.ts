// Website operator confirmed by the site owner. This does not assert brand ownership.
export const websiteOperator = '欧润国际贸易（深圳）有限公司';
export const officialSiteUrl = 'https://www.pdoxserum.com';

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${officialSiteUrl}/#operator`,
      name: websiteOperator,
      legalName: websiteOperator,
      url: `${officialSiteUrl}/`,
    },
    {
      '@type': 'WebSite',
      '@id': `${officialSiteUrl}/#website`,
      name: 'PDOX 普特奥斯官方网站',
      alternateName: ['PDOX', 'PDOX普特奥斯', '普特奥斯'],
      url: `${officialSiteUrl}/`,
      publisher: { '@id': `${officialSiteUrl}/#operator` },
    },
  ],
};
