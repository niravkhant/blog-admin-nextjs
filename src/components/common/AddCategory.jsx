import  { useState } from 'react'
import { makeApiCall } from '@/utils/makeApiCall';
import { Bounce, toast } from "react-toastify";

const AddCategory = ({onclick}) => {
  const [formData, setFormData] = useState({name: ""});

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      console.log(name ,value )
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = (res) => {
      toast.success(`${res.message}`, {
        progress: undefined,
        transition: Bounce,
        });
      console.log(res);
      setFormData({name: ""});
      console.log("Category created successfully");
    };
    const onError = (error) => {
      console.error("Error 400: Error in creating category", error.response);
      toast.error(`${error.response.data.message}`, {
        progress: undefined,
        transition: Bounce,
        });
    };

    // setIsLoading(true);
    makeApiCall("POST", "blog/create-blogcategory", formData, onSuccess, onError);
    // setIsLoading(false);
  };
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black bg-opacity-40">
              <div className="fixed inset-0 w-full h-full" />
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4">
                <div className="bg-white rounded-md shadow-lg px-4 py-6">
                  <div className="flex items-center justify-end">
                    <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={onclick}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="max-w-sm mx-auto space-y-3 text-center">
                    <h2 className="text-lg font-medium text-gray-800">Add new category</h2>
                    <p className="text-sm text-gray-600">Add new category to show in select options</p>
                    <div className="relative text-start">
                      <label className="text-start px-1" htmlFor="newcategory">
                        New Category
                      </label>
                      <input
                        className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        placeholder="category name"
                        id="newcategory"
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button onClick={handleSubmit} className="w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-black hover:bg-black/80 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
                      Add category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default AddCategory