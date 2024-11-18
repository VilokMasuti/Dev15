import React from "react";

import AskQuestionForm from "@/components/forms/AskQuestionForm";
const AskAQuestion = () => {
  return (
    <>
      <h1 className=" h1-bold text-dark-100_light900">Ask a Question</h1>
      <div className=" mt-9">
        <AskQuestionForm />
      </div>
    </>
  );
};

export default AskAQuestion;
