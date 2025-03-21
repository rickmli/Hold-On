const FAKEPOSTS = [
  {
    title: "Exploring the Future of Technology",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique erat at augue tempor, a eleifend nulla efficitur. Curabitur eget leo et augue vestibulum iaculis. Sed feugiat, velit in laoreet ullamcorper, ligula orci feugiat ante, ac scelerisque leo libero et velit.",
    image: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
    tags: [
      {
        name: "Technology",
        color: "blue",
        posts: [
          "exploring-the-future-of-technology",
          "understanding-the-basics-of-machine-learning",
        ],
      },
      {
        name: "Environment",
        color: "green",
        posts: ["exploring-the-future-of-technology"],
      },
    ], // 更新了tag的结构
    status: "published",
    slug: "exploring-the-future-of-technology",
    comments: [],
    likes: 45,
    views: 1200,
    summary: "An in-depth look into how technology will shape the future.",
    createdAt: "2024-02-15T10:30:00Z",
    updatedAt: "2024-03-01T12:15:00Z",
  },
  {
    title: "The Impact of Climate Change on Global Ecosystems",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada mauris quis libero tincidunt, in elementum leo elementum. Nullam ac velit quis justo accumsan feugiat. Integer nec ex non orci malesuada luctus. Nam et turpis a metus elementum cursus.",
    image: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
    tags: [
      {
        name: "Environment",
        color: "green",
        posts: ["exploring-the-future-of-technology"],
      },
      {
        name: "Sustainability",
        color: "gray", // 这个tag在FAKETAGS里没有出现，所以颜色使用了默认值
        posts: ["the-impact-of-climate-change-on-global-ecosystems"],
      },
    ], // 更新了tag的结构
    status: "published",
    slug: "the-impact-of-climate-change-on-global-ecosystems",
    comments: [],
    likes: 30,
    views: 800,
    summary:
      "This article examines how climate change affects ecosystems worldwide.",
    createdAt: "2024-01-22T09:00:00Z",
    updatedAt: "2024-02-18T14:20:00Z",
  },
  {
    title: "Understanding the Basics of Machine Learning",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut erat sit amet leo dictum malesuada a eget lorem. Vivamus facilisis quam vitae dui vulputate, non gravida libero tempor. Integer pharetra, ligula a tincidunt volutpat, leo ligula venenatis elit, ac tincidunt ante erat id lorem.",
    image: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
    tags: [
      {
        name: "AI & Machine Learning",
        color: "red",
        posts: ["understanding-the-basics-of-machine-learning"],
      },
    ], // 更新了tag的结构
    status: "published",
    slug: "understanding-the-basics-of-machine-learning",
    comments: [],
    likes: 55,
    views: 1500,
    summary:
      "A beginner's guide to understanding machine learning concepts and applications.",
    createdAt: "2024-03-05T13:45:00Z",
    updatedAt: "2024-03-15T16:00:00Z",
  },
];

const FAKETAGS = [
  {
    name: "Technology",
    posts: [
      "exploring-the-future-of-technology",
      "understanding-the-basics-of-machine-learning",
    ],
    color: "blue",
  },
  {
    name: "Environment",
    posts: ["exploring-the-future-of-technology"],
    color: "green",
  },
  {
    name: "AI & Machine Learning",
    posts: ["understanding-the-basics-of-machine-learning"],
    color: "red",
  },
  {
    name: "Sustainability", // 新增了一个标签，处理未在FAKETAGS中出现的情况
    posts: ["the-impact-of-climate-change-on-global-ecosystems"],
    color: "gray", // 给没有定义的标签添加一个默认的颜色
  },
];

export { FAKEPOSTS, FAKETAGS };
