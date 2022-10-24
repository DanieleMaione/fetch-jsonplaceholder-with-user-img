import React, { useState } from "react";

const Picture = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div style={style.div}>
      {image && (
        <div style={style.div}>
          <img
            style={style.img}
            alt="Img Not Found"
            width={"150px"}
            src={URL.createObjectURL(image)}
          />
          <br />
          <button onClick={() => setImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <input
        type="file"
        name="img"
        onChange={(event) => {
          setImage(event.target.files![0]);
        }}
      />
    </div>
  );
};

export default Picture;

const style = {
  div: {
    display: "inline",
  },

  img: {
    borderRadius: "50%",
  },
};
