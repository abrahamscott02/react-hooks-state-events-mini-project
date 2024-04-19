import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === 'All') {
      return task;
    } else if (task.category === selectedCategory){
      return task;
    }
  });

  const onTaskFormSubmit = (newTask) => {
    // Add the new task to the list of tasks
    setTasks([...tasks, newTask]);
  };

  const onDeleteTask = (text) => {
    // Remove the task at the specified index from the list of tasks
    const updatedTasks = tasks.filter((task) => {
      if (task.text !== text){
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={onDeleteTask} />
    </div>
  );
}

export default App;
