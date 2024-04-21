import SearchContainer from "../container/SearchContainer";
import ViewPartialFeedback from "../container/ViewPartialFeedback";

export default function Reviews() {
  return (
    <div>
      <SearchContainer />
      <div className="px-2">
        <ViewPartialFeedback />
      </div>
    </div>
  )
}