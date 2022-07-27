import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Records from "./records.json";
import { Rate } from "antd";
import { useEffect, useState } from "react";

function All({ idx = 0 }) {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    if (idx === 0) setRecords(Records);
    else {
      const start = idx * 6-6;
      const stop = start + 6;
      setRecords(Records.slice(start, stop));
    }
  }, [idx]);

  if (records === null) return "Loading...";
  return (
    <>
      <Row className="m-4">
        {records.map((record, index) => {
          return (
            <>
              <Col className="d-flex mb-4" md="6">
                <Card
                  style={{
                    width: "15rem",
                    padding: "10px",
                    borderRadius: "25px",
                  }}
                >
                  <Card.Img variant="top" src={record.icons} />
                </Card>
                <Card
                  className="mt-3 mb-3 ps-3"
                  style={{
                    width: "40rem",
                    padding: "10px",
                    borderRadius: "0px 25px 25px 0px",
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "20px" }}>
                      {record.name}
                    </Card.Title>
                    <Card.Text>
                      By <span style={{ fontWeight: 500 }}>{record.com}</span>
                    </Card.Text>

                    <div className="text-muted">
                      {" "}
                      {record.desc.substring(0, 100)}{" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {" "}
                        Read More
                      </span>
                    </div>

                    <Rate defaultValue={record.rating} />
                    <div className="d-flex align-items-center  justify-content-between ">
                      <div
                        className="mt-1 "
                        style={{
                          fontSize: "20px",
                          color: "black",
                          fontWeight: 700,
                        }}
                      >
                        ${record.price}
                        <span style={{ fontSize: "12px", fontWeight: 400 }}>
                          USD
                        </span>
                      </div>
                      <div className="d-flex align-items-center me-5">
                       
                        <img
                          alt=""
                          src="./images/like.png"
                          width="20"
                          height="20"
                          className="d-inline-block like me-4"
                        />
                        <img
                          alt=""
                          src="./images/comment.png"
                          width="25"
                          height="20"
                          className="d-inline-block me-2 "
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default All;
