import PageLayout from "../../components/PageLayout";

const TopStories = () => {
  return (
    <>
      <PageLayout pageUrl="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty" />
    </>
  );
};

export default TopStories;
