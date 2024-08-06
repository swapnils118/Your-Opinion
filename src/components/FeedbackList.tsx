import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";

// const exampleFeedbackItems = [
//   {
//     upvoteCount: 118,
//     badgeLetter: "S",
//     companyName: "Swapnil",
//     text: " Hello I am a Software Developer",
//     daysAgo: 1,
//   },
//   {
//     upvoteCount: 119,
//     badgeLetter: "S",
//     companyName: "Sameep",
//     text: " Hello I am a  Senior Software Developer",
//     daysAgo: 2,
//   },
//   {
//     upvoteCount: 120,
//     badgeLetter: "S",
//     companyName: "Sunita",
//     text: " Hello I am a Mistress of the house",
//     daysAgo: 3,
//   },
// ];

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoding(true);

      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong");
      }
      setIsLoding(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {/* {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })} */}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
