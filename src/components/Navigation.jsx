export default function Navigation({ setCurrentPage }) {
    return (
      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("hotels")}>Hotels</button>
        <button onClick={() => setCurrentPage("thingsToDo")}>Things to Do</button>
        <button onClick={() => setCurrentPage("restaurants")}>Restaurants</button>
      </nav>
    );
  }
  