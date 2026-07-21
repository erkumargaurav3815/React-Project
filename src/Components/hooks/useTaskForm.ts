import { useState } from "react";

export const useTaskForm = () => {
  const [project, setProject] = useState("");
  const [projectName, setProjectName] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setProject("");
    setProjectName("");
    setTopic("");
    setDescription("");
    setDate("");
  };

  return {
    project,
    setProject,
    projectName,
    setProjectName,
    topic,
    setTopic,
    description,
    setDescription,
    date,
    setDate,
    resetForm,
  };
};
