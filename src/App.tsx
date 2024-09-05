import React from 'react';
import Header from './features/header/Header';
import Table from "./features/table/Table";
import SearchInput from "./features/filter/SearchInput";
import ClearButton from './features/filter/ClearButton';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.filter}>
          <SearchInput field="name" />
          <SearchInput field="username" />
          <SearchInput field="email" />
          <SearchInput field="phone" />
          <ClearButton />
        </div>
        <Table />
      </main>
    </>
  )
}

export default App
