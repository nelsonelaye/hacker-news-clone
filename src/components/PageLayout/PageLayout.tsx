// import React from "react";
import "./PageLayout.module.scss";
import style from "./PageLayout.module.scss";
import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { story as StoryType, props as AppProps } from "./PageLayout.types";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import moment from "moment";
const PageLayout = ({ pageUrl }: AppProps) => {
  const [stories, setStories] = useState<Array<StoryType>>();

  const [loading, setLoading] = useState(false);

  const getStories = async (id: number) => {
    try {
      const story = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      return story.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getIds = async () => {
    try {
      setLoading(true);
      const result = await axios.get(pageUrl);
      if (result) {
        const data = result.data.slice(0, 30);
        await Promise.all(data.map((id: number) => getStories(id))).then(
          (res) => {
            setStories(res);
            console.log("Fetched res", res);
          }
        );
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIds();
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            textAlign: "center",
            margin: "50px 0",
          }}
        >
          <ClipLoader />
        </div>
      ) : (
        <main>
          {stories?.map((item) => (
            <div key={item.id} className={style["story-highlight"]}>
              <a href={item.url}>
                <h2>{item.title}</h2>
              </a>
              <span>
                by
                <a
                  href={`https://news.ycombinator.com/user?id=${item.by}`}
                  style={{ padding: "0 5px" }}
                >
                  {item.by}
                </a>
                | {moment(item.time).format("MM/DD/YYYY, h:mm a")} |{" "}
                {item.kids?.length} comments
              </span>
            </div>
          ))}
        </main>
      )}
    </>
  );
};

export default PageLayout;
