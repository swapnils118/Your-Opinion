import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import { TFeedbackItem } from "../../lib/types";

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

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
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
