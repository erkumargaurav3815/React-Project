import { useState } from "react";

export const useValidation = () => {
  const [errors, setErrors] = useState({
    project: "",
    taskName: "",
    description: "",
    date: "",
    time: "",
  });

  const isAlphabetOnly = (value: string) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  //form modal validation
  const validate = (
    project: string,
    projectName: string,
    topic: string,
    description: string,
    date: string,
    startTime: string,
    endTime: string,
  ) => {
    const newErrors = {
      project: "",
      taskName: "",
      description: "",
      date: "",
      time: "",
    };

    // if project=assignment then taskName=projectName else taskName=topic
    const taskName = project === "assignment" ? projectName : topic;

    if (!project) {
      newErrors.project = "Category is required";
    }

    if (!taskName.trim()) {
      newErrors.taskName = "Topic/Project name is required";
    } else if (taskName.trim().length < 5) {
      newErrors.taskName = "Minimum 5 characters required";
    } else if (!isAlphabetOnly(taskName)) {
      newErrors.taskName = "Only alphabets are allowed";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.trim().length < 20) {
      newErrors.description = "Minimum 20 characters required";
    }

    if (!date) {
      newErrors.date = "Date is required";
    }

    if (!startTime || !endTime) {
      newErrors.time = "Start Time and End Time are required";
    }

    setErrors(newErrors);

    //get all values from newErrors object and return true if all errors are empty else false
    return Object.values(newErrors).every((err) => err === "");
  };

  return { errors, validate };
};
