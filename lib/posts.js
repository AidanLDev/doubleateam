import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'pages/posts');

export const getBlogPostPaths = () => {
  return fs.readdirSync(postsDir).map((post) => post.replace(/\.js$/, ''));
};
