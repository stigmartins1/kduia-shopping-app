import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/* import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location'; */

import A from "./components/A";
import Abbr from "./components/Abbr";
import Address from "./components/Address";
import Area from "./components/Area";
import Article from "./components/Article";
import Aside from "./components/Aside";
import ArrayMap from "./components/ArrayMap";
import ArrayFilter from "./components/ArrayFilter";
import Button from "./components/Button";
import Profile from "./components/Profile";
import RecipeList from "./components/RecipeList";
import Test from "./components/Test";
import Poem from "./components/Poem";
import Clock from "./components/Clock";
import ChatApp from "./components/ChatApp";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import Form from "./components/Form";
import BucketList from "./components/BucketList";
import Toolbar from "./components/Toolbar";
import EventPropagation from "./components/EventPropagation";
import EventPropagationStop from "./components/EventPropagationStop";

function App() {
  return (
    <div className="App">
      <h1>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
          HTML Elements
        </a>
      </h1>
      <A url="https:/url.com" email="me@email.com" phone="+555 123 456" />
      <Abbr />
      <Address email="another@email.com" phone="+555 987 654" />
      <Area />
      <Article />
      <Aside />
      <ArrayMap />
      <ArrayFilter />
      <BucketList />
      <Button />
      <ChatApp />
      <Clock />
      <Counter />
      <EventPropagation />
      <EventPropagationStop />
      <Form />
      <Gallery />
      <Poem />
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: "physicist and chemist",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
          discovered: "polonium (element)",
        }}
        size={100}
      />
      <RecipeList />
      <Test person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
      <Toolbar />
    </div>
  );
}

export default App;
