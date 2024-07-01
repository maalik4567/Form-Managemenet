//Form.jsx
import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(5, { message: "Enter minimum 5 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is Required" })
    .min(1, { message: "Number should be greater than or equal to 1 " }).max(10000,{message:"Number must be less than or equal to 10000"}),
  category: z
    .string()
    .refine((value) => value !== "select-one", {
      message: "Category is required",
    }),
});

const Form = ({onSubmit}) => {
  // const [formData, setFormData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const submitHandler = (values) => {
    //  setFormData([...formData, values]);
    onSubmit(values);
    //console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Product
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select className="form-select" id="category"  {...register("category")}>
          <option value="select-one">Select-one</option>
          <option>Grocery</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
    
  );
};

export default Form;
