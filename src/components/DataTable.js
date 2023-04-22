import React, { useState } from 'react';
import {Table } from 'antd';
import {db} from '../firebase';
import { collection, getDocs, doc } from 'firebase/firestore';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    sorter: {
        compare: (a, b) => a.time - b.time,
      },
    
  },
];
const DataTable = () => {
    const [data, setData] = useState([
        // {
        //     key: '1',
        //     name: 'Nguyen Hung',
        //     time: '2021-10-10 10:10:10'
        // },
        // {
        //     key: '2',
        //     name: 'Nguyen Huu Huy',
        //     time: '2021-10-10 10:10:13'
        // },
        // {
        //     key: '3',
        //     name: 'Bui Phuoc Huy',
        //     time: '2021-10-10 10:10:11'
        // },
        // {
        //     key: '4',
        //     name: 'Truong Hoang Nhat Huy',
        //     time: '2021-10-10 10:10:12'
        // },
    ]);
    const querySnapshot =  getDocs(collection(db, "data")).then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().labels.length > 0)
            {
                setData(data => [...data, {key: doc.id, name: doc.data().labels[0], time: doc.data().time}]);
            }
          });
        }
      )
    return (
        <>
        <h1>No Mask Detect</h1>
          <Table columns={columns} dataSource={data} size="middle" />
        </>
    )
 
    };
export default DataTable;