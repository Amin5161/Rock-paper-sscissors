import { create } from "zustand";

export const useGameStore = create((set) => ({
  playerChoice: null,
  computerChoice: null,
  result: "",
  rulesModal: false,

  setPlayerChoice: (choice) => set({ playerChoice: choice }),
  setComputerChoice: () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    set({ computerChoice: randomChoice });
  },
  calculateResult: () =>
    set((state) => {
      const { playerChoice, computerChoice } = state;
      if (!playerChoice || !computerChoice) {
        return { result: "Please make your choice!" };
      }
      if (playerChoice === computerChoice) {
        return { result: "It's a tie!" };
      }
      if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return { result: "You win!" };
      }
      return { result: "Computer wins!" };
    }),

  setRulesModal: () =>
    set((state) => {
      return { rulesModal: !state.rulesModal };
    }),
}));
