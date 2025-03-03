import React from "react";
import SuggestionCard from "./suggestion-card";

const Suggestions = () => {
  return (
    <div className="flex items-center gap-2">
      <SuggestionCard
        title="Top 3 highest transfers"
        desc="For my account in December..."
      />

      <SuggestionCard
        title="Best way to invest 5 million naira"
        desc="In Nigeria according to my spend pattern..."
      />

      <SuggestionCard
        title="Top 3 highest transfers"
        desc="For my account in December..."
      />
    </div>
  );
};

export default Suggestions;
