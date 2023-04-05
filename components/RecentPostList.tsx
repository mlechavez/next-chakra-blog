import { Flex, HStack, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";

interface Props {
  posts: any;
}
const RecentPostlist = ({ posts }: Props) => {
  return (
    <SimpleGrid minChildWidth={250} spacing={5} mb={50}>
      <PostCard key={posts[0].id} post={posts[0]} />
      <Stack height="100%">
        {posts
          .filter((p: any) => p.id !== 1)
          .map((post: any, index: number) => (
            <PostCard key={post.id} post={post} direction="row" />
          ))}
      </Stack>
    </SimpleGrid>
  );
};

export default RecentPostlist;
