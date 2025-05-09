type AnimationType = "fade-left" | "fade-right";

export const getAnimationVariant = (
  type: AnimationType,
  delay: number = 0,
  duration: number = 0.8
) => {
  const baseAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        ease: "easeOut",
        delay,
      },
    },
  };

  switch (type) {
    case "fade-left":
      return {
        ...baseAnimation,
        hidden: { ...baseAnimation.hidden, x: 100 },
        visible: {
          ...baseAnimation.visible,
          x: 0,
        },
      };

    case "fade-right":
      return {
        ...baseAnimation,
        hidden: { ...baseAnimation.hidden, x: -100 },
        visible: {
          ...baseAnimation.visible,
          x: 0,
        },
      };

    default:
      return baseAnimation;
  }
};
