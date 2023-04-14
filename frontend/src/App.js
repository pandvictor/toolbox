import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getFiles, selectFiles } from "./store/filesSlice";
import TableFiles from "./components/tableFiles";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const files = useSelector(selectFiles);

  useEffect(() => {
    dispatch(getFiles()).then(() => setLoading(false));
  }, [dispatch]);
  console.log("files", files);
  return (
    <Container>
      <div class='alert alert-danger' role='alert'>
        React Test app
      </div>
      {loading ? <p>Cargando...</p> : <TableFiles filesList={files} />}
    </Container>
  );
};

export default App;
