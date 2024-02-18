const collapsableContent = [
  {
    title: "Recommended Toys and Activities",
    content: [
      "Suggestions for safe toys and activities to keep pets active.",
      "Tips for enriching the pet's environment and preventing boredom.",
    ],
  },
  {
    title: "Pet First Aid",
    content: [
      "Essential information on how to handle emergencies for pets.",
      "Checklist of recommended first aid supplies to have at home.",
    ],
  },
  {
    title: "Dental Care",
    content: [
      "Tips for maintaining good oral health in dogs and cats.",
      "Information on dental brushing and dental treat options.",
    ],
  },
  {
    title: "Training and Behavior",
    content: [
      "Positive training techniques for dogs and cats.",
      "Solutions to common behavioral issues.",
    ],
  },
  {
    title: "Preparing for Pet Travel",
    content: [
      "Tips for safe travel with pets.",
      "Checklist for packing for a trip with a pet.",
    ],
  },
];

export const CollapseHTML = collapsableContent
  .map(
    ({ title, content }) => `
  <div class="containerInfo">
    <div class="containerTitle">
      <h3>${title}</h3>
        <button class="collapseButton">
          <img class="iconButton" src="/arrow-down.png" alt="arrow down" />
        </button>
    </div>
    <ul class="contentCollapse">
      ${content.map((element) => `<li>${element}</li>`).join("")}
    </ul>
  </div>`
  )
  .join("");
