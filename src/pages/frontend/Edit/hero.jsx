import React, { useState } from 'react';
import { useNavigate, Link,useParams } from 'react-router-dom';

const hero = () => {





  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
   var todos = JSON.parse(localStorage.getItem('todos') || '[]');
   
  const navigate = useNavigate();
   const { todoId } = useParams();
  //  useParams() is used here

  const handleSubmit = (e) => {
    e.preventDefault();
    
  const todo = todos.find(item => item.id == todoId)
    
    console.log(todo)
     todo.title = title.trim(),
      todo.description = description.trim(),
      todo.date = new Date().toString()
      localStorage.setItem('todos', JSON.stringify(todos));
    navigate('/dashboard');
  }

 const data = todos.find(item => item.id == todoId)

   


  return (
     <div className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
      <div className="row justify-content-center w-100">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          
          
          <div className="card border-0 shadow-lg rounded-4">
            
            
            <div className="card-header bg-primary text-white rounded-top-4 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="mb-0 fw-bold">
                    <i className="bi bi-plus-circle me-2"></i>
                    Edit your Todo
                  </h3>
                 
                </div>
                
              </div>
            </div>

            
            <div className="card-body p-4">
              
            
             

              <form onSubmit={handleSubmit}>

            
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-pencil me-2 text-primary"></i>
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    placeholder={data.title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    
                    required
                  />
                
                </div>

               
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-text-paragraph me-2 text-primary"></i>
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    rows="3"
                    placeholder={data.description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ resize: 'vertical' }}
                  />
                  
                </div>

                
              

                

                
                <div className="d-flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary flex-grow-1 py-2 fw-bold rounded-3"
                
                  >
                  Edit
                  </button>
                 
                </div>

              </form>
            </div>

            
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
