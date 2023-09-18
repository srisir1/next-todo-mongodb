"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Inputs/Inputs";
import Button from "@/components/Inputs/Button";
import { AddP_Status, AddP_Treatment, GetSessionData } from "@/libs/actions/LocalActions";

export default function AddTopic() {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [treatment, setTreatment] = useState('');
  const [state, setState] = useState(false);

  const [astatus, setAStatus] = useState({});

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    query: '',
    enquired_for: '',
    description: '',
  });

  const { name, email, phone, message, query, enquired_for, description, } = data;

  useEffect(() => {
    const sd = GetSessionData();
    setAStatus(sd);
  }, [state]);



  function InputHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function AddPatientStatus() {
    AddP_Status(status);
    setStatus('');
    setState(!state);
  }
  function AddPatientTreatment() {
    AddP_Treatment(treatment);
    setTreatment('');
    setState(!state);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const P_data = {
      ...data,
      status: astatus?.PatientStatus,
      treatment: astatus?.PatientTreatment
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ P_data }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      }
      else { throw new Error("Failed to create a topic"); }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <div><br /> <br />
          {astatus?.PatientStatus && astatus.PatientTreatment.map((x, i) => (<p key={i} className="text-green-400">{i + 1}. {x}</p>))}
          <div className="flex gap-2 items-center">
            <Input Label={'Patient treatments*'} Value={treatment ? treatment : ''} Onchange={(e) => setTreatment(e.target.value)} />
            <Button Type={"button"} Value={'Add'} Onclick={() => AddPatientTreatment(status)} Disabled={!treatment[4]} />
          </div><br />
        </div>
        <div><br /> <br />
          {astatus?.PatientStatus && astatus.PatientStatus.map((x, i) => (<p key={i} className="text-green-400">{i + 1}. {x}</p>))}
          <div className="flex gap-2 items-center">
            <Input Label={'Patient status*'} Value={status ? status : ''} Onchange={(e) => setStatus(e.target.value)} />
            <Button Type={"button"} Value={'Add'} Onclick={AddPatientStatus} Disabled={!status[4]} />
          </div>
        </div>

        <div>
          <Input Name={'name'} Label={'Patient name*'}
            Onchange={InputHandler}
            error={'Please fill name'}
            Value={name[4] && name}
          />
          <Input Name={'email'} Label={'Patient email*'}
            Onchange={InputHandler}
            error={'Please fill email'}
            Value={email[10] && email}
          />
          <Input Name={'phone'} Label={'Patient phone*'}
            Onchange={InputHandler}
            error={'Please fill phone'}
            Value={phone[9] && phone}
          />
          <Input Name={'message'} Label={'Patient message*'}
            Onchange={InputHandler}
            error={'Please fill message'}
            Value={message[3] && message}
          />
        </div>
        <div>
          <Input Name={'query'} Label={'Patient query*'}
            Onchange={InputHandler}
            error={'Please fill query'}
            Value={query[3] && query}
          />

          <Input Name={'enquired_for'} Label={'Patient enquired for*'}
            Onchange={InputHandler}
            error={'Please fill enquired_for'}
            Value={enquired_for[5] && enquired_for}
          />
          <Input Name={'description'} Label={'Patient description*'}
            Onchange={InputHandler}
            error={'Please fill description'}
            Value={description[5] && description}
          />
        </div>


      </form>
      <div><br />
        <Button Value={'Add new patient'} Onclick={handleSubmit} />
      </div>
    </>
  );
}
