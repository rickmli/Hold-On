import { useLocation } from "react-router-dom";
import { faker } from "@faker-js/faker";

const generateFakeSentence = () => {
  return faker.lorem.sentence();
};

const generateFakePosts = (numPosts = 3) => {
  const fakePosts = [];

  for (let i = 0; i < numPosts; i++) {
    fakePosts.push({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
      image: faker.image.url(), // 使用 faker.image.url() 生成图像 URL
      tags: Array.from({ length: 3 }, () => faker.lorem.word()),
      status: "published",
      slug: faker.lorem.slug(),
      comments: [],
      likes: faker.number.int({ min: 0, max: 100 }),
      views: faker.number.int({ min: 0, max: 1000 }),
      summary: faker.lorem.sentence(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    });
  }

  return fakePosts;
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const getPathnames = (pathname) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return pathnames;
};

export { truncateText, getPathnames, generateFakePosts, generateFakeSentence };
