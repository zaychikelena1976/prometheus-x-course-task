import React from "react";
import SpecificBook from "./specific-book/specific-book";
import { CartBar } from "../components";
export default function BasketBook() {
  return (
    <div className="row bg-info">
      <CartBar />
    </div>
  );
}
