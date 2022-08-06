import React from "react";
//Back to top button for mobile
//Pass a screen width prop to the component

const BackToTop = ({ yLimit, screenSizeToDisplay }) => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    if (typeof window != "undefined")
      window.addEventListener("scroll", () => {
        //This triggers the button display.
        //When the pageYOffset is above
        //Any value larger than the current screen width enables the button.

        if (
          window.pageYOffset > yLimit &&
          window.screen.width < screenSizeToDisplay
        ) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
  }, []);

  const scrollToTop = () => {
    if (typeof window != "undefined")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            width: "6rem",
            height: "6rem",
            bottom: "6rem",
            right: "0px",
            position: "fixed",
            zIndex: 1000,
            backgroundColor: "#d18462",
            border: "none",
          }}
          aria-label="scroll-to-top-button"
        >
          &#9650;
        </button>
      )}
    </>
  );
};

export default BackToTop;
