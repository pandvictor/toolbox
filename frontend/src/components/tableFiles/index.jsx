import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const TableFiles = ({ filesList }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    let newList = [];

    filesList.forEach((e) => {
      if (e) {
        const { file } = e;
        e.lines.forEach((l) => {
          if (l) {
            newList.push({ file, ...l });
          }
        });
      }
    });
    setListItems(newList);
  }, [filesList]);

  return (
    <>
      <Table className='table table-striped' striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {listItems
            .filter((f) => f)
            .map((f, index) => (
              <tr key={index}>
                <td>{f.file}</td>
                <td>{f.text}</td>
                <td>{f.number}</td>
                <td>{f.hex}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableFiles;
