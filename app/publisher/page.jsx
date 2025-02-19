import { Card, CardBody, CardHeader, Form } from "@heroui/react";

const PublisherPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5] px-4 py-16">
      <Card className="mx-auto w-full max-w-4xl rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <h1 className="flex items-center gap-2 text-2xl">
            Campus Feed
            <span className="text-muted-foreground ml-2 text-base font-normal">
              Details Form
            </span>
          </h1>
        </CardHeader>
        <CardBody>
          <Form className="h-[400px] space-y-8"></Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default PublisherPage;
