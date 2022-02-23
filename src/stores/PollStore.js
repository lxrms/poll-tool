import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "É biscoito ou bolacha?",
    answerA: "Biscoito",
    answerB: "Bolacha",
    votesA: 5,
    votesB: 2,
  },
  {
    id: 2,
    question: "Melhor \"framework\" de Javascript?",
    answerA: "Svelte",
    answerB: "Vue",
    votesA: 9,
    votesB: 5,
  },
]);

export default PollStore