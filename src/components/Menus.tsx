import { useState } from "react";
import SalsaMenu from "./menus/SalsaMenu";
import AppMenu from "./menus/AppMenu";
import CevicheMenu from "./menus/CevicheMenu";
import TacoMenu from "./menus/TacoMenu";
import TortaMenu from "./menus/TortaMenu";
import EntreeMenu from "./menus/EntreeMenu";
import SingleTacos from "./menus/SingleTacos";
import SmallBites from "./menus/SmallBites";
import PartyMenu from "./menus/PartyMenu";

export default function Menus() {
  const [mainMenu, setMainMenu] = useState(true);
  const [happyMenu, setHappyMenu] = useState(false);
  const [partyMenu, setPartyMenu] = useState(false);
  return (
    <div
      className="menus"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Our Menus</h1>
      <div
        className="menu-buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          color: "black",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => {
            setMainMenu(true);
            setHappyMenu(false);
            setPartyMenu(false);
          }}
        >
          Lunch and Dinner
        </button>
        <button
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => {
            setMainMenu(false);
            setHappyMenu(true);
            setPartyMenu(false);
          }}
        >
          Happy Hour
        </button>
        <button
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => {
            setMainMenu(false);
            setHappyMenu(false);
            setPartyMenu(true);
          }}
        >
          Special Events and Private Parties
        </button>
      </div>{" "}
      <p
        style={{
          color: "white",
          fontSize: "24px",
          marginTop: "20px",
          maxWidth: "800px",
          margin: "20px auto",
          lineHeight: "1.5",
        }}
      >
        All items are gluten free except the tortas, tres leches, and choco
        flan. We have a dedicated fryer that only uses corn and rice flour.
        Staff is trained on cross contamination.
      </p>
      {mainMenu && (
        <div className="menu-grid">
          <AppMenu />
          <SalsaMenu />
          <TacoMenu />
          <CevicheMenu />
          <TortaMenu />
          <EntreeMenu />
        </div>
      )}
      {happyMenu && (
        <>
          <h2 style={{ textAlign: "center" }}>Served weekdays 3pm - 6pm</h2>
          <div className="menu-grid">
            <SingleTacos />
            <SmallBites />
          </div>
        </>
      )}
      {partyMenu && (
        <>
          <h2 style={{ textAlign: "center" }}>
            Easy access family style lunch and dinner for groups
          </h2>
          <div className="menu-grid">
            <PartyMenu />
          </div>
        </>
      )}
    </div>
  );
}
