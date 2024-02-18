import { Avatar } from "../components/Avatar/Avatar";
import { Card } from "../components/Card/Card";

const ourReviews = [
  {
    avatar: "/AvatarReviews/Emma.png",
    name: "Emma",
    comment:
      "Your website is simply amazing! I've found the best information to care for my lovely pets. The practical tips and detailed articles make it easy to provide them with the best care. Thank you for being my number one resource for everything pet-related! 🌟🐾",
  },
  {
    avatar: "/AvatarReviews/Liam.png",
    name: "Liam",
    comment:
      "I want to sincerely thank you for all the valuable resources you share. Especially, the articles on dog care have helped me strengthen the bond with my furry friend. Your website is a blessing for all pet lovers. 🐶💖",
  },
  {
    avatar: "/AvatarReviews/Olivia.png",
    name: "Olivia",
    comment:
      "My fish swim with joy thanks to the advice I found here. The section on aquariums is so comprehensive and easy to follow. I can't wait to explore more and enhance the lives of my aquatic friends! 🐟🌈",
  },
  {
    avatar: "/AvatarReviews/Noah.png",
    name: "Noah",
    comment:
      "I'm impressed by the wealth of valuable information on hamster care. Thanks to your website, I've created a perfect environment for my little furry friend. The practical tips and product recommendations are exceptional. 🐹✨",
  },
  {
    avatar: "/AvatarReviews/Sophia.png",
    name: "Sophia",
    comment:
      "Your website has become my favorite resource for bird care. The diversity of content, from detailed guides to fun anecdotes, makes it a special place for all feathered lovers. Keep up the excellent work! 🦜📚",
  },
  {
    avatar: "/AvatarReviews/Jackson.png",
    name: "Jackson",
    comment:
      "My bunnies are happier and healthier thanks to your amazing website! The feeding tips, information on toys, and care guides are invaluable. It's paradise for any rabbit owner! 🐰💕",
  },
  {
    avatar: "/AvatarReviews/Brisna.png",
    name: "Brisna",
    comment:
      "I can't express how grateful I am for the information you provide on turtle care. My turtle pair is thriving thanks to the tips and tricks you share. Thank you for making a difference in the lives of our beloved turtles! 🐢🌟",
  },
];

export const Reviews = ourReviews
.map((info, index) =>
  index === 0
    ? `<div class="itemCarousel carouselShow">
    ${Avatar(info.avatar, "", "", "var(--color-100)")}
    ${Card("containerCardText", info.name, info.comment)}
  </div>`
    : `<div class="itemCarousel">
  ${Avatar(info.avatar, "", "", "var(--color-100)")}
  ${Card("containerCardText", info.name, info.comment)}
</div>`
)
.join("");