import React, { useEffect, useState } from "react";
import { Table, Button, Input } from "antd";
import "antd/dist/antd.css";
import "./BookList.css";

const BookList = (props) => {
  const [dataSource, setDataSource] = useState();
  const [query, setQuery] = useState(null);

  const handleQuery = (e) => {
    console.log("e.target.value");

    setQuery(e.target.value);
  };

  useEffect(() => {
    const url = `https://codersx-expressjs-29-1.herokuapp.com/api/books${query === null ? "" : `?q=${query}`}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setDataSource(res);
      })
      .catch((err) => console.log(err));
  }, [query]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      align: "center",
    },
    {
      title: "Book Cover",
      key: "coverUrl",
      align: "center",
      render: (record) => <img src={record.coverUrl} alt=""></img>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: () => <Button type="primary">Add to cart</Button>,
    },
  ];

  return (
    <div className="book-list">
      <h1>BOOK LIST</h1>

      <Input
        placeholder="input search text"
        onPressEnter={handleQuery}
        style={{ width: 200 }}
      />

      <Table
        dataSource={dataSource}
        columns={columns}
        bordered={true}
        tableLayout={"auto"}
      />
    </div>
  );
};

export default BookList;
