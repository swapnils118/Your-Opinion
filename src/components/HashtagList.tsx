export default function HashtagList({ companyList }) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <li>
            <button>#{company}</button>
          </li>
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
