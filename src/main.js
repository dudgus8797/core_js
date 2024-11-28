import { getNode, insertLast } from "kind-tiger";
import santa from "@/assets/santa.png";
import { btn } from "@/style/style.module.css";

const app = getNode("#app");
const template = /* html */ `
  <figure>
    <img style="width: 30vw" src="${santa}" alt="" />
    <figcaption>산타 모자 쓴 호랭</figcaption>
  </figure>
  <button type="button" class="${btn}">Button</button>
`;

insertLast(app, template);
