import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';


const Hero = () => {

 



  var todos = JSON.parse(localStorage.getItem('todos') || '[]');
  var user = JSON.parse(localStorage.getItem('currentUser') || '');

  const handleStatus = (id) => {

    const todo = todos.find(item => item.id == id)
    todo.status = true
    console.log(todo)
    localStorage.setItem('todos', JSON.stringify(todos));
    window.location.reload();

  }



  const handleDelete = (id) => {

    const todo = todos.find(item => item.id == id)
    const del = todos.filter(item => item.id !== id)

    console.log(todo)
    localStorage.setItem('todos', JSON.stringify(del));
    window.location.reload();

  }


  var specTodo = []
  todos.map(todo => {
    if (todo.userId === user.userID) {
      specTodo.push(todo)
    }
  }
  )

  console.log(specTodo)





  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>My Dashboard</h1>
        <Link to="/dashboard/add" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add New Todo
        </Link>
      </div>

      {specTodo.length === 0 ? (
        <div className="alert alert-info text-center">
          <p>No todos yet. <Link to="/dashboard/add">Add your first todo</Link></p>
        </div>
      ) : (
        <div className="row">
          {specTodo.map(todo => (
            <div className="col-md-6 col-lg-4 mb-3" key={todo.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className='card-title text-muted'>Title</p>
                  <p className="card-text ">{todo.title}</p>
                  <p className='card-title text-muted'> Description</p>
                  <p className="card-text ">{todo.description}</p>
                  <p className='card-title text-muted'>Status</p>
                  {!todo.status && (
                    <span className="badge bg-warning">
                      Pending
                    </span>
                  )}

                  {todo.status && (
                    <span className="badge bg-success">
                      Complete
                    </span>
                  )}

                </div>
                <div className="card-footer bg-transparent">
                  {!todo.status && (
                    <button className="btn btn-success btn-sm " onClick={() => handleStatus(todo.id)} >Done</button>
                  )}
                  {!todo.status && (
                  <Link to={`/dashboard/edit/${todo.id}`} className="btn btn-warning btn-sm ms-2">
                    Edit
                  </Link>
                  )}
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;