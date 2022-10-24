import React, { useState } from "react";

const Picture = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div>
      {image && (
        <div>
          <img
            alt="Img Not Found"
            width={"150px"}
            src={URL.createObjectURL(image)}
          />
          <br />
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