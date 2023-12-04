import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout title="Home">
      <p>
        Hello!
      </p>
      <Button color="primary">
        Click here
      </Button>
    </Layout>
  );
}
