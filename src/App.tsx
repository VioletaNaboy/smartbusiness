import "./App.css"
import Table from "./features/table/Table"
import SearchInput from "./features/filter/SearchInput"

const App = () => {
  return (
    <div className="App">
      <div>
        <SearchInput field="name" />
        <SearchInput field="username" />
        <SearchInput field="email" />
        <SearchInput field="phone" />
      </div>
      <Table />
    </div>
  )
}

export default App
