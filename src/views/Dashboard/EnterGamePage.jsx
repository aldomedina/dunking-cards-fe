import React, { useState } from "react";
import Layout from "../../components/Layout";
import TextInput from "../../components/TextInput";

import s from "./style.module.scss";

const EnterGamePage = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Layout goBack>
      <div className={s.header}>
        <h2 className={s.title}>
          ENTRAR A<br /> PARTIDA
        </h2>
      </div>
      <div className={s.body}>
        <div className={s.block}>
          <TextInput
            label="BUSCAR PARTIDA POR NOMBRE"
            fullWidth
            value={search}
            setValue={setSearch}
            focusOnMount
          />
        </div>
        <div className={s.block}>
          <h3 className={s.subtitle}>RESULTADOS</h3>

          <div className={s.results}>
            {results.length ? results.map((res, i) => <div />) : <div />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EnterGamePage;
