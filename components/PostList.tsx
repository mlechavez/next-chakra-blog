import { SimpleGrid } from "@chakra-ui/react";
import PostCard from "./PostCard";

interface Props {
  posts: any;
}
const PostList = ({ posts }: Props) => {
  return (
    <SimpleGrid>
      {posts.map((post: any) => (
        <PostCard post={post} />
      ))}
    </SimpleGrid>
  );
};

export default PostList;
