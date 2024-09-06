import Header from './features/header/Header';
import MarqueeEl from './features/header/MarqueeEl';
import Table from "./features/table/Table";
import SearchInput from "./features/filter/SearchInput";
import ClearButton from './features/filter/ClearButton';


import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Header />
      <MarqueeEl />
      <div className={styles.container}>
        <div className={styles.filter}>
          <SearchInput field="name" />
          <SearchInput field="username" />
          <SearchInput field="email" />
          <SearchInput field="phone" />
          <ClearButton />
        </div>
        <div className={styles.wrapper}>
          <Table />
        </div>
      </div>
    </>
  )
}

export default App
