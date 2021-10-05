import React, { useState } from "react";
import { Button, Layout, Input, InputNumber, Typography } from "antd";
import Header from "./Header";

const { Content, Footer } = Layout;
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

function Seats() {
  const [num, setNum] = useState(1);
  const [jsonInput, setJsonInput] = useState();
  const [result, setResult] = useState(null);

  const getBestSeats = () => {
    if (!jsonInput) {
      return;
    }

    const { venue, seats } = JSON.parse(jsonInput);
    const { columns } = venue.layout;
    const centerColumn = columns / 2;
    const seatArr = [];

    for (let key in seats) {
      seatArr.push(seats[key]);
    }

    seatArr.sort((a, b) => {
      const compareRow = a.row.localeCompare(b.row);
      if (compareRow === 0) {
        return (
          Math.abs(centerColumn - a.column) - Math.abs(centerColumn - b.column)
        );
      } else {
        return compareRow;
      }
    });

    setResult(seatArr.slice(0, num).map((seat) => seat.id));
  };

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ margin: "50px 0", padding: "0 50px" }}>
        <Title>Best Seats</Title>
        <Text>JSON input:</Text>
        <TextArea rows={15} onChange={(e) => setJsonInput(e.target.value)} />
        <div className="control">
          <div className="input-control">
            <Paragraph style={{ marginTop: "10px" }}>
              Requested seats:
            </Paragraph>
            <InputNumber
              min={1}
              defaultValue={num}
              onChange={(val) => setNum(val)}
            />
          </div>
          <div className="submit-control">
            <Button type="primary" htmlType="submit" onClick={getBestSeats}>
              Submit
            </Button>
          </div>
        </div>
        {result && <Typography>{result.toString()}</Typography>}
      </Content>
      <Footer style={{ textAlign: "center" }}>Jayden Jin ©2021.</Footer>
    </Layout>
  );
}

export default Seats;
