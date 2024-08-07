import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/types";

// MOVED TO ITS OWN FILE: types
// type FeedbackItem = {
//   upvoteCount: number;
//   badgeLetter: string;
//   companyName: string;
//   text: string;
//   daysAgo: number;
// };

type FeedbackItemProps = { feedbackItem: TFeedbackItem };

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      {/* <p>{feedbackItem.daysAgo}d</p> */}
      <p>{feedbackItem.daysAgo === 0 ? "New" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
