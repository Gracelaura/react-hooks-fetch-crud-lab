import React from "react";

function QuestionItem({ question, handleChangeAnswer, handleDeleteItem}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onChange(e){
    handleChangeAnswer(id ,parseInt(e.target.value))
  }

  function onDelete(){
    handleDeleteItem(question.id)
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={onChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
