import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import styles from "../style.module.css";
import Dashboard from "./Dashboard";

function Video() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&key=AIzaSyD3K866JOe78J354GZ4e4gwr8LnYEu6wPI"
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.items.map((item) => {
          return {
            title: item.snippet.title,
            vid: item.contentDetails.videoId,
          };
        });
        setCourses(result);
      });
  }, []);

  return (
    <>
      <Navbar>
        <Dashboard />
      </Navbar>
      <div className={styles.container}>
        {courses.map((item) => {
          return (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${item.vid}`}
              ></iframe>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Video;
