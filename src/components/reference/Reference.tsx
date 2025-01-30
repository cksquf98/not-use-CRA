import { Container, Title } from "../common";
import { LinkPreview } from "../preview";
import { URL_YARN_BERRY } from "./url";

export const Reference = () => {
  return (
    <Container>
      <Title>참고자료</Title>
      <LinkPreview url={URL_YARN_BERRY} />
    </Container>
  );
};
