import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export type Blog = {
  slug: string;
  title: string;
  date: string;
  status: string;
  content: string;
};

export function getSortedBlogsData(): Blog[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || '',
        status: matterResult.data.status || 'Published',
        content: matterResult.content,
      };
    });

  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogData(slug: string): Blog | undefined {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  return {
    slug,
    title: matterResult.data.title || slug,
    date: matterResult.data.date || '',
    status: matterResult.data.status || 'Published',
    content: matterResult.content,
  };
}
