import PATTERNS from "./PATTERNS.js";
import React from "react";
import { atom, useAtom, getDefaultStore } from "jotai";
import _ from "lodash";

const focusedAtom = atom(null);
const defaultStore = getDefaultStore();

function useFocused() {
  const [focused, setFocused] = useAtom(focusedAtom);
  const [group, number, baseline] = focused ? focused.split("-") : [];
  console.log("Focused", [group, number, baseline]);
  const focusedParts = { group, number, baseline };
  return [focusedParts, setFocused];
}

function usePinned(
  initialValue = JSON.parse(localStorage.getItem("v1-apl-pinned") || "[]")
) {
  const [f, setFocused] = useFocused();
  const [pinned, setPinned] = React.useState(initialValue);
  const add = (d) => setPinned((s) => _.uniq([...s, d]));
  const remove = (d, group) => {
    setPinned((s) => s.filter((p) => p !== d));
    if (f.group === group) setFocused(null);
  };
  const pinnedStr = JSON.stringify(pinned);
  React.useEffect(() => {
    localStorage.setItem("v1-apl-pinned", pinnedStr);
  }, [pinnedStr]);
  return [pinned, add, remove];
}

let lastKnownScrollPosition = {};
let ticking = false;
function doSomething(e, scrollPos, id) {
  const focused = defaultStore.get(focusedAtom);
  const [group, , baseline] = focused ? focused.split("-") : [];

  if (group === id && baseline < scrollPos) {
    console.log(
      "====>",
      id,
      scrollPos,
      defaultStore.get(focusedAtom),
      [...e.target.children[1].children].forEach((d) => {
        if (d.offsetTop > scrollPos)
          return defaultStore.set(focused, `${id}-${d}-${d.offsetTop}`);
      })
    );
  }
}
function scrollHandler(id) {
  return function (e) {
    lastKnownScrollPosition[id] = e.target.scrollTop;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(e, lastKnownScrollPosition[id] || 0, id);
        ticking = false;
      });
      ticking = true;
    }
  };
}

function App() {
  const [pinned, add, remove] = usePinned();
  console.log(`pinned`, pinned);

  function onFocus(number) {}

  return (
    <>
      <div className="thread-container" onScroll={scrollHandler("pinned")}>
        <Thread
          id="pinned"
          edl={pinned}
          action={["Remove", remove]}
          onFocus={onFocus}
          bottomMessage="Add patterns to create your mini-language for a project..."
        />
      </div>
      <div className="thread-container" onScroll={scrollHandler("all")}>
        <Thread
          id="all"
          edl={PATTERNS.list}
          action={[
            "Add",
            (number, id) => {
              add(number, id);
              setTimeout(
                () =>
                  document
                    .getElementById(`pinned-${number}`)
                    .scrollIntoView({ behavior: "smooth", block: "center" }),
                200
              );
            },
          ]}
        />
      </div>
    </>
  );
}

function Thread({ id, edl, action, bottomMessage }) {
  const [f, setFocused] = useFocused();
  const [buttonLabel, buttonOnClick] = action;

  return (
    <>
      <Aside
        title="helps to complete..."
        baseline={f.baseline}
        edl={
          f && id === f.group ? PATTERNS.dictionary[f.number]?.biggerLinks : []
        }
      />

      <section className="list">
        {edl.map((d) => {
          const p = PATTERNS.dictionary[d] || {};
          return (
            <div
              key={d}
              id={`${id}-${p.number}`}
              onClick={(e) =>
                setFocused(`${id}-${d}-${e.currentTarget.offsetTop}`)
              }
              className={
                id === f.group && f.number === `${d}` ? "item focused" : "item"
              }
            >
              <div className="left">
                <div className="head">
                  <h1>
                    {p.number} {[...Array(p.asterisks)].map(() => "✱").join("")}
                  </h1>
                  <h2>{p.name}</h2>
                  <p>{p.frontText}</p>
                  <div className="category">{p.category}</div>
                </div>
                <div
                  className="image-box"
                  style={{
                    backgroundImage: `url("${
                      process.env.PUBLIC_URL +
                      `/images/${String(p.number).padStart(3, "0")}photo.jpg`
                    }")`,
                  }}
                />
                <button
                  className="action"
                  onClick={(e) => {
                    buttonOnClick(p.number, id);
                    e.stopPropagation();
                  }}
                >
                  {buttonLabel}
                </button>
              </div>
              <div className="right">
                <p>{p.backText}</p>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/images/${String(p.number).padStart(3, "0")}diagram.gif`
                  }
                  alt="diagram"
                />
              </div>
            </div>
          );
        })}
        {bottomMessage && <div className="bottom-message">{bottomMessage}</div>}
      </section>

      <Aside
        title="complete with..."
        baseline={f.baseline}
        edl={
          f && id === f.group ? PATTERNS.dictionary[f.number]?.smallerLinks : []
        }
      />
    </>
  );
}

export default App;

function Aside({ baseline, edl = [], title }) {
  return (
    <section
      className="aside"
      style={{ paddingTop: baseline ? +baseline - 54 : 0 }}
    >
      {edl.length > 0 && <h1>{title}</h1>}
      {edl.map((d) => {
        const { number, asterisks, name, frontImage } =
          PATTERNS.dictionary[d] || {};
        return (
          <div
            key={d}
            style={{
              backgroundImage: `url("${
                process.env.PUBLIC_URL +
                `/images/${String(number).padStart(3, "0")}photo.jpg`
              }")`,
            }}
            onClick={() =>
              document
                .getElementById(`all-${number}`)
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            {number} {[...Array(asterisks)].map(() => "✱").join("")}
            <br />
            {name}
          </div>
        );
      })}
    </section>
  );
}

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
