// type HashtagListProps = {
//   companyList: string[];
//   handleSelectCompany: (company: string) => void;
// };
type HashtagListProps = { children: React.ReactNode };

export default function HashtagList({ children }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {children}

      {/* Hard coding the hashtag list value */}
      {/* <li>
        <button>#swapnil</button>
      </li>
      <li>
        <button>#sameep</button>
      </li>
      <li>
        <button>#tyson</button>
      </li> */}
    </ul>
  );
}
