import { useEffect, useState } from "react";
import "./read.module.css";
import { Table } from "semantic-ui-react";
import axios from "axios";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6552dcde5449cfda0f2ddf42.mockapi.io/fakeData`)
      .then((r) => {
        setAPIData(r.data);
      });
  }, []);

  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Table className="ui celled table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
