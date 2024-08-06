import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 118,
    badgeLetter: "S",
    companyName: "Swapnil",
    text: " Hello I am a Software Developer",
    daysAgo: 1,
  },
  {
    upvoteCount: 119,
    badgeLetter: "S",
    companyName: "Sameep",
    text: " Hello I am a  Senior Software Developer",
    daysAgo: 2,
  },
  {
    upvoteCount: 120,
    badgeLetter: "S",
    companyName: "Sunita",
    text: " Hello I am a Mistress of the house",
    daysAgo: 3,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {/* <FeedbackItem feedbackItem={feedbackItem} /> */}

      {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })}
    </ol>
  );
}
