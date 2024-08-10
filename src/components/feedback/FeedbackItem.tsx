import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);
  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={() => setUpvoteCount((prev) => ++prev)}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
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