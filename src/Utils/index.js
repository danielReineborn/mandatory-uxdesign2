import axios from "axios";

export function shuffle(array) {
  var m = array.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;

}


export function decoder(string) {
  var he = require('he');
  return he.decode(string);
}

export function getFormData(formTarget) {
  const formData = new FormData(formTarget);
  const iterator = formData.entries();
  let arr = Array.from(iterator).map((x) => ({
    answer: x[1],
  }))

  return arr;

}

export function playerResult(playerAnswersObj, triviaQuestionsArray) {
  let result = triviaQuestionsArray.filter((x, i) => {
    return decoder(x.correctAnswer) === playerAnswersObj[`${i}`];
  });
  return result.length;
}

export function zeroOrValue(value) {
  if (value) {
    return value;
  } else {
    return 0;
  }
}

export function fetchData(url) {
  return axios.get(url)
}

export function quizData(arr) {
  return arr.map((x) => {
    return {
      question: x.question,
      correctAnswer: x.correct_answer,
      aswers: shuffle([x.correct_answer, ...x.incorrect_answers])
    }
  })
}