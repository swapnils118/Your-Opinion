import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            company={company}
            onSelectCompany={handleSelectCompany}
          />
        );
      })}

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
