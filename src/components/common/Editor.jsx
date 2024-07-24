"use client"
import React, { useEffect } from "react";
import Trix from "trix"

const Editor = () => {
  useEffect(() => {
    document.addEventListener("trix-before-initialize", () => {
      // Change Trix.config if you need
    });
  }, []);
  return (
    <div>
      <form>
        <input id="x" type="hidden" name="content" />
        <trix-editor class="trix-content" input="x"></trix-editor>
      </form>
    </div>
  );
};

export default Editor;
