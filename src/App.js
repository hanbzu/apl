import APL from "./apl.js";
import React from "react";
import { atom, useAtom } from "jotai";

const focusedAtom = atom(null);

function usePinned(initialValue = []) {
  const [pinned, setPinned] = React.useState([1, 2, 3]);
  const add = (d) => null;
  const remove = (d) => null;
  return [pinned, add, remove];
}

function App() {
  const [pinned, add, remove] = usePinned([1, 2, 3]);

  return (
    <>
      <div className="thread-container">
        <Thread id="pinned" edl={pinned} />
      </div>
      <div className="thread-container">
        <Thread id="list" edl={APL.list} />
      </div>
    </>
  );
}

// console.log(JSON.stringify(APL.all));

function Thread({ id, edl }) {
  const [focused, setFocused] = useAtom(focusedAtom);
  const [group, number, baseline] = focused ? focused.split("-") : [];
  console.log([group, number, baseline]);

  return (
    <>
      <section
        className="larger"
        style={{ paddingTop: baseline ? +baseline : 0 }}
      >
        {focused &&
          APL.dictionary[number]?.biggerLinks.map((d) => (
            <div key={d}>
              {d} {APL.dictionary[d]?.name}
            </div>
          ))}
      </section>
      <section className="list">
        {edl.map((d) => {
          const {
            name,
            category,
            asterisks,
            frontText,
            backText,
            frontImage,
            backImage,
          } = APL.dictionary[d] || {};
          return (
            <div
              key={d}
              onClick={(e) => setFocused(`${id}-${d}-${e.target.offsetTop}`)}
              className={
                group === id && number === `${d}` ? "item focused" : "item"
              }
            >
              <div className="left">
                <div className="head">
                  <h1>
                    {d} {[...Array(asterisks)].map(() => "✱").join("")}
                  </h1>
                  <h2>{capitalise(name)}</h2>
                  <p>{frontText}</p>
                  <div className="category">{category}</div>
                </div>
                <div
                  className="image-box"
                  style={{ backgroundImage: `url("${frontImage}")` }}
                />
              </div>
              <div className="right">
                <p>{backText}</p>
                <img src={backImage} />
              </div>
            </div>
          );
        })}
      </section>
      <section
        className="smaller"
        style={{ paddingTop: baseline ? +baseline : 0 }}
      >
        {focused &&
          APL.dictionary[number]?.smallerLinks.map((d) => (
            <div key={d}>
              {d} {APL.dictionary[d]?.name}
            </div>
          ))}
      </section>
    </>
  );
}

export default App;

function capitaliseWord(word, lc, isFirst) {
  if (
    !isFirst &&
    ["of", "the", "at", "in", "per", "and"].includes(word.toLowerCase())
  )
    return lc ? word.toLowerCase() : word;
  const [first, ...rest] = word;
  return (
    first.toUpperCase() + (lc ? rest.join("").toLowerCase() : rest.join(""))
  );
}
function capitalise(str, lc = true, all = true) {
  return all
    ? str
        .split(/(\s|-|')/)
        .map((s, i) => capitaliseWord(s, lc, i === 0))
        .join("")
    : capitaliseWord(str, lc);
}
