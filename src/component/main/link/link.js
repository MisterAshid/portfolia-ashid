import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Link = () => {
  return (
    <div className="icons">
      <SocialIcon url="https://facebook.com/Mr.Ashid" target={"_blank"} />
      <SocialIcon url="https://twitter.com/MrAshid7399" target={"_blank"} />
      <SocialIcon url="https://instagram.com/Mr.Ashid" target={"_blank"} />
      <SocialIcon url="https://www.youtube.com/@user-ix1qh4xt4j " />
      <SocialIcon url="https://github.com/MisterAshid" target={"_blank"} />
      <SocialIcon url="https://discord.gg/jMhubZUMgP" target={"_blank"} />
      <SocialIcon
        url="https://steamcommunity.com/profiles/76561198274808538/"
        target={"_blank"}
      />
    </div>
  );
};

export default Link;
