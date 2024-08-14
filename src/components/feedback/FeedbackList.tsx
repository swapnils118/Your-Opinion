import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

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

{
  /* {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })} */
}

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
