import TopicsList from "@/components/TopicsList";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.URL}/api/topics`, { cache: "no-store" });
    if (!res.ok) { throw new Error("Failed to fetch topics"); }
    return res.json();
  } catch (error) { console.log("Error loading topics: ", error); }
};
export default async function Home() {
  const res = await getTopics();
  return <TopicsList topics={res?.topics} />;
}
