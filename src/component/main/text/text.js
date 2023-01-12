import { Typewriter } from "react-simple-typewriter";

const Text = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="App">
      <h1>Hi, My name is Ashid</h1>
      <h2 style={{ margin: "auto 0", fontWeight: "normal" }}>
        I am{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Graphic designer",
              "Software engineer",
              "Youtuber",
              "Streamer",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h2>
    </div>
  );
};

export default Text;
