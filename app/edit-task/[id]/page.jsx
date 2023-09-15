import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${process.env.URL}/api/topics/${id}`, { cache: "no-store", });

    if (!res.ok) { throw new Error("Failed to fetch topic"); }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const res = await getTopicById(id);
  return <EditTopicForm id={id} title={res?.topic?.title} description={res?.topic?.description} />;
}
