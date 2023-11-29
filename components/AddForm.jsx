'use client';
import { useRouter } from 'next/navigation';
import axios from "axios";
export default  function AddForm({user_id}) {
  const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        // Get the form data
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const uid=user_id
    
        try {
          // Send data to the '/addNote' API using Axios
          const {data} = await axios.post(' http://localhost:9000/api/addNote', {
            title: title,
            desc: description,
            user_id:uid
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if(data){
          router.push('/loading')
        }

    
          // Handle the response as needed
         
        } catch (error) {
          // Handle errors
          console.error('Error:', error);
        }

  

  
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-base-100 p-6 rounded-md shadow-md w-full max-w-md"
        onSubmit={handleSubmit} // Call handleSubmit on form submission
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type here"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            className="mt-1 p-2 w-full border rounded-md text-black"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary px-4 py-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

