import React, { useEffect, useRef, useState } from "react";
import { Table } from "antd";
import { db } from "../firebase";
import { collection, getDocs, query, doc } from "firebase/firestore";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Time",
    dataIndex: "time",
    sorter: {
      compare: (a, b) => new Date(a.time) - new Date(b.time),
    },
    sortDirections: ['descend'],
    defaultSortOrder: 'descend',
  },
];
const DataTable = () => {
  const [data, setData] = useState([]);
  const data_tb = useRef([]);
  async function getData() {
  const q = query(collection(db, "data"));
  const querySnapshot = await getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data_tb.current.push({
        key: doc.id,
        name: Object.keys(doc.data().labels).map(key => `${key} ${((key === "with_mask") || (key ==="unknown")) ? `: ${doc.data().labels[key]}` : '' }`).join(", ").replace(/_/g, " ") ,
        time: doc.data().time,
      });
    });
  });
  return data_tb.current;
  }
  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
      <h1>No Mask Detect</h1>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};
export default DataTable;
