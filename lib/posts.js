import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'pages/posts');

export const getBlogPostPaths = () => fs.readdirSync(postsDir);