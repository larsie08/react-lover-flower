import { FC, memo } from "react";

import {
  InstagramSvg,
  PhoneSocialSvg,
  WhatsappSvg,
} from "../../../../../../assets";

const icons = [<InstagramSvg />, <WhatsappSvg />, <PhoneSocialSvg />];

export const SocialIconsBlock: FC = memo(() => {
  return (
    <ul className="social_icons flex justify-end lg:mt-28 lg:gap-8 max-lg:gap-5">
      {icons.map((icon, idx) => (
        <li key={idx}>{icon}</li>
      ))}
    </ul>
  );
});
