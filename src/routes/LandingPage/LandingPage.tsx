import { useCallback, useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import axios from "axios";
import { story as StoryType } from "./LandingPage.types";
import { ClipLoader } from "react-spinners";

const LandingPage = () => {
  const [topStories, setTopStories] = useState(Array<StoryType>);

  const [storiesID, setStoriesID] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchStories = useCallback(async () => {
    let stories: Array<StoryType> = [];

    storiesID?.map(async (item) => {
      await axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
        )
        .then((res) => {
          //   console.log("pushing", res);
          stories.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    await console.log("stories", stories);
    setTopStories(stories);

    setLoader(false);
  }, []);

  const getStoriesId = useCallback(async () => {
    setLoader(true);
    let url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;

    await axios
      .get(url)
      .then((res) => {
        setStoriesID(res.data);
        fetchStories();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getStoriesId();
  }, []);
  return (
    <>
      <Navigation />

      {loader ? (
        <ClipLoader />
      ) : (
        topStories?.map((item) => <div key={item.id}>{item.title}</div>)
      )}
    </>
  );
};

export default LandingPage;
