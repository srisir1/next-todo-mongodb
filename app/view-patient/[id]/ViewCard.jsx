import RemoveBtn from '@/components/RemoveBtn';
import Link from 'next/link';
import React from 'react'
import { HiPencilAlt } from 'react-icons/hi';
import './view_card.css';

const ViewCard = ({ data: x }) => {
    const createdAt = new Date(x.createdAt).toLocaleDateString();
    const updatedAt = new Date(x.updatedAt).toLocaleDateString();
    return (
        <>
            <div className='card'>
                <div>
                    <p>Name : <span>{x.name}</span></p>
                    <p>Added Date : <span>{createdAt}</span></p>
                    <p>Last Update : <span>{updatedAt}</span></p>
                    <p>Phone : <span>{x.phone}</span></p>
                    <p>Email : <span>{x.email}</span></p>
                </div>
                <div>
                    <p>Message : <span>{x.message}</span></p>
                    <p>Description : <span>{x.description}</span></p>
                    <p>Query : <span>{x.query}</span></p>
                    <p>Enquired for : <span>{x.enquired_for}</span></p>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <br /> <hr />
                        <b>Status :-</b>
                        <hr />
                        {x.status?.map((y, i) => (<p key={i}>{i + 1}. <span>{y}</span></p>))}
                    </div>
                    <div>
                        <br /> <hr />
                        <b>Treatment :-</b>
                        <hr />
                        {x.treatment?.map((z, i) => (<p key={i}>{i + 1}. <span>{z}</span></p>))}
                    </div>
                </div>
            </div> <br />
            <div className="flex items-center justify-around bg-slate-300 p-2 mt-4">
                <RemoveBtn id={x._id} />
                <Link href={`/edit-task/${x._id}`}><HiPencilAlt size={24} /></Link>
            </div>
        </>
    )
}

export default ViewCard;