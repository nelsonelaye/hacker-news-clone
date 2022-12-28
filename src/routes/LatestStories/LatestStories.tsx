import PageLayout from "../../components/PageLayout";

const LatestStories = () => {
  return (
    <>
      <PageLayout pageUrl="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty" />
    </>
  );
};

export default LatestStories;
