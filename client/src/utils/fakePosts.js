import { faker } from "@faker-js/faker";

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

export default generateFakePosts;
