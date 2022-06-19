import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'pages/posts');

export const getBlogPostPaths = () => {
  return [
    {
      path: 'how-to-pass-ielts',
      title: 'How to pass the IELTs Exam',
      size: { width: '200px', height: '200px' },
      tags: ['education', 'visa', 'UK visa'],
    },
    {
      path: 'marriage-requirements',
      title:
        'Guide for Marriage between a foreigner and Indonesian citizen in Indonesia',
      size: { width: '200px', height: '200px' },
      tags: ['marriage', 'love'],
    },
    {
      path: 'obtaining-a-family-visa',
      title: 'How to get a UK family visa',
      size: { width: '200px', height: '200px' },
      tags: ['visa', 'UK visa'],
    },
    {
      path: 'what-to-do-in-indonesia',
      title: 'Indonesia travel guide',
      size: { width: '200px', height: '200px' },
      tags: ['travel', 'indonesia'],
    },
    {
      path: 'what-to-do-in-the-uk',
      title: 'UK Travel guide',
      size: { width: '200px', height: '200px' },
      tags: ['UK', 'travel'],
    },
  ];
  // return fs.readdirSync(postsDir).map((post) => post.replace(/\.js$/, ''));
};
