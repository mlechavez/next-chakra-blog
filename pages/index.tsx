import type { NextPage } from "next";
import { Container, HStack, Select, Spacer, Text } from "@chakra-ui/react";
import RecentPostList from "../components/RecentPostList";

const posts = [
  {
    id: 1,
    title: "HTML 5 Tutorial",
    slug: "html-5-tutorial",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, expedita eaque aut aliquam iure deserunt non impedit id enim explicabo eum voluptatibus dolor ea minima illo accusamus delectus rerum similique consequatur! Molestiae, voluptatem eligendi voluptates culpa ipsam aspernatur soluta magnam aperiam, natus, libero dolore impedit quidem odio est iusto perferendis facilis corporis tempore quisquam nisi eum totam quo sint! Voluptates sapiente doloribus ratione, aperiam nulla hic corrupti, voluptate sed repellendus, id vitae ipsa blanditiis obcaecati. Officiis tempora ratione autem nemo, culpa maiores suscipit accusamus. In itaque unde illum ab ratione. Sunt sit necessitatibus ratione? Eos accusantium architecto officia eaque soluta.
    `,
    categories: [
      { id: 1, name: "tech" },
      { id: 2, name: "web development" },
    ],
  },
  {
    id: 2,
    title: "HTML 5 Tutorial",
    slug: "html-5-tutorial",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, expedita eaque aut aliquam iure deserunt non impedit id enim explicabo eum voluptatibus dolor ea minima illo accusamus delectus rerum similique consequatur! Molestiae, voluptatem eligendi voluptates culpa ipsam aspernatur soluta magnam aperiam, natus, libero dolore impedit quidem odio est iusto perferendis facilis corporis tempore quisquam nisi eum totam quo sint! Voluptates sapiente doloribus ratione, aperiam nulla hic corrupti, voluptate sed repellendus, id vitae ipsa blanditiis obcaecati. Officiis tempora ratione autem nemo, culpa maiores suscipit accusamus. In itaque unde illum ab ratione. Sunt sit necessitatibus ratione? Eos accusantium architecto officia eaque soluta.
    `,
    categories: [
      { id: 1, name: "tech" },
      { id: 2, name: "web development" },
    ],
  },
  {
    id: 3,
    title: "HTML 5 Tutorial",
    slug: "html-5-tutorial",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, expedita eaque aut aliquam iure deserunt non impedit id enim explicabo eum voluptatibus dolor ea minima illo accusamus delectus rerum similique consequatur! Molestiae, voluptatem eligendi voluptates culpa ipsam aspernatur soluta magnam aperiam, natus, libero dolore impedit quidem odio est iusto perferendis facilis corporis tempore quisquam nisi eum totam quo sint! Voluptates sapiente doloribus ratione, aperiam nulla hic corrupti, voluptate sed repellendus, id vitae ipsa blanditiis obcaecati. Officiis tempora ratione autem nemo, culpa maiores suscipit accusamus. In itaque unde illum ab ratione. Sunt sit necessitatibus ratione? Eos accusantium architecto officia eaque soluta.
    `,
    categories: [
      { id: 1, name: "tech" },
      { id: 2, name: "web development" },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Container textAlign="center">
        <Text fontSize="21px">Our blog</Text>
        <Text fontSize="4xl">Articles and stories</Text>
      </Container>
      <Text as="h2" fontSize="3xl" mb={8}>
        Recent Posts
      </Text>
      <RecentPostList posts={posts} />
      <HStack mb={8}>
        <Text as="h2" fontSize="3xl" mr={10}>
          All Bogs
        </Text>
        <Spacer />
        <Text mr={8}>Filter by:</Text>
        <Select placeholder="Select option" width="200px">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
    </div>
  );
};

export default Home;
