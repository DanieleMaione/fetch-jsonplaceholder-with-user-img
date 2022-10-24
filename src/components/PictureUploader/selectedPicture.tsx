import React, { useState } from "react";

const Picture = () => {
  const [image, setImage] = useState<File | null>(null);
  {
    image && (
      <div>
        <img alt="ciao" width={"150px"} src={URL.createObjectURL(image)} />
        <br />
      </div>
    );
  }
};
