import ViewCard from "./ViewCard";

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
  return (
    <ViewCard data={res?.topic} />
  )
}
