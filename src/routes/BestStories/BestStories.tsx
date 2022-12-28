import PageLayout from "../../components/PageLayout";

const BestStories = () => {
  return (
    <>
      <PageLayout pageUrl="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty" />
    </>
  );
};

export default BestStories;
