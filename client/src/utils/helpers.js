import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

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

const capitalize = function (str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getToday = () => {
  const timestamp = new Date(); // 或者从 MongoDB 获取的 ISODate
  const formattedDate = dayjs(timestamp).format("YYYY-MM-DD");
  return formattedDate;
};

const formateDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

function slugify(text) {
  return text
    .replaceAll(" ", "-") // 非字母数字替换为 -
    .replace(/-+/g, "-") // 合并多个连续的 -
    .replace(/^-+|-+$/g, ""); // 去掉头尾的 -
}

export {
  truncateText,
  generateFakePosts,
  generateFakeSentence,
  getToday,
  formateDate,
  capitalize,
  slugify,
};
