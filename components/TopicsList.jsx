import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import EmpatyState from "./EmpatyState";

import './style.css'

export default function TopicsList({ topics }) {

  return (
    <>
      {topics?.length < 1 ? (<EmpatyState />) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 h-auto card">
          {topics?.map((x, i) => {
            const createdAt = new Date(x.createdAt).toLocaleDateString();
            const updatedAt = new Date(x.updatedAt).toLocaleDateString();
            return (
              <Link key={i} href={`/view-patient/${x._id}`}>
                <div key={i} className="p-2 bg-slate-200 rounded-md">
                  <p>Name : <span>{x.name}</span></p>
                  <p>Added Date : <span>{createdAt}</span></p>
                  <p>Last Update : <span>{updatedAt}</span></p>
                  <p>Phone : <span>{x.phone}</span></p>
                  <p>Email : <span>{x.email}</span></p>
                  <p>Message : <span>{x.message}</span></p>
                  <p>Description : <span>{x.description}</span></p>
                  <p>Query : <span>{x.query}</span></p>
                  <p>Enquired for : <span>{x.enquired_for}</span></p>
                </div>
              </Link>
            )
          })}
        </div >
      )
      }
    </>
  );
}
