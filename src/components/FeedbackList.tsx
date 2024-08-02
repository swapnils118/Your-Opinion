import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>118</span>
        </button>

        <div>
          <p>S</p>
        </div>

        <div>
          <p>Swapnil</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, neque repudiandae quis eos dolorum rem.
          </p>
        </div>

        <p>1d</p>
      </li>
    </ol>
  );
}
