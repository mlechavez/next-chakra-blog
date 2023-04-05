import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const getCard = (post: any, direction: "column" | "row") => {
  return direction === "column" ? (
    <Card direction={direction}>
      <CardBody>
        <Image
          src="http://via.placeholder.com/640x360"
          alt="test"
          width="200"
          height="100"
          style={{ width: "100%" }}
        />
        <Text>{post.title}</Text>
        <Text>{post.summary}</Text>
      </CardBody>
      <CardFooter>
        {post.categories.map((category: any) => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </CardFooter>
    </Card>
  ) : (
    <Card direction={direction}>
      <Image
        src="http://via.placeholder.com/640x360"
        alt="test"
        width="200"
        height="200"
      />
      <Stack>
        <CardBody>
          <Text mb={4}>{post.title}</Text>
          <Text>{post.summary}</Text>
        </CardBody>
        <CardFooter>
          {post.categories.map((category: any) => (
            <Button key={category.id}>{category.name}</Button>
          ))}
        </CardFooter>
      </Stack>
    </Card>
  );
};

interface Props {
  post: any;
  direction?: "column" | "row";
}
const PostCard = ({ post, direction = "column" }: Props) => {
  return getCard(post, direction);
};

export default PostCard;
