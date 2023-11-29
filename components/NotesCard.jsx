'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import{redirect} from 'next/navigation'
const NoteCard = ({uid}) => {
  const [notes, setNotes] = useState([]);
  const [editable, setEditable] = useState(false);
    const router = useRouter();
  useEffect(() => {
    // Fetch notes from the API
    axios.get(`http://localhost:9000/api/getNotes/${uid}`)
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  }, []);

  const handleToggleEdit = () => {
    setEditable(!editable);
  };

  const handleDelete = async (noteId) => {
    const{data}=await axios.post("http://localhost:9000/api/deleteNote",
        {
            id:noteId
        },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        }
        
           
        )
        if(data){ 
            router.push('/loading')
         }
    console.log(noteId)
    
    // Implement delete logic here
  };

  const handleUpdate = (noteId, updatedContent) => {
    // Implement update logic here
  };

  return (
    <div className="flex flex-wrap">
      {notes.map(note => (
        <div key={note._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white border rounded-md p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-black text-xl font-semibold">{note.title}</h3>
              <div className="flex items-center">
                <button onClick={() => handleDelete(note._id)} className="mr-2 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button onClick={() => handleUpdate(note.id, 'Updated content')} className="mr-2 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <label className="flex items-center">
                  <span className="mr-2 text-black">Editable</span>
                  <input
                    type="checkbox"
                    checked={editable}
                    onChange={handleToggleEdit}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </label>
              </div>
            </div>
            
            <p className="text-black text-sm">{note.desc}</p>
            <div className="flex items-center justify-end">
              <button className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 17l5-5m0 0l-5-5m5 5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
