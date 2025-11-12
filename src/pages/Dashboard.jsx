import React, {useEffect, useState} from 'react';
import { api } from "./../auth/api";

export default function Dashboard(){
  const [classes,setClasses]=useState([]);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  useEffect(()=>{
    (async()=>{
      if (role==='teacher'){
        const res = await api('/teacher/my-classes','GET',null,token);
        setClasses(res || []);
      } else if (role==='student'){
        const res = await api('/student/my-classes','GET',null,token);
        setClasses(res || []);
      }
    })();
  },[]);

  return (
    <div>
      <h3>My Classes ({role})</h3>
      <ul>
        {classes.map(c=> (
          <li key={c._id}>
            <b>{c.title}</b> — {c.schedule} — Fee: ₹{c.fee}
            {role==='teacher' && <div>Students: {c.students?.map(s=>s.name).join(', ')}</div>}
            {role==='student' && <div>Teacher: {c.teacher?.name} ({c.teacher?.email})</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
