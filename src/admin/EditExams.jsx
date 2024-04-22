import React, { useEffect, useState } from "react";
import { ImagetoBase64 } from "../utitlity/ImagetoBase64";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditExams = () => {
  const navigate = useNavigate();
  const { examId } = useParams();
  const [data, setData] = useState({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    image: "",
    type: "",
    answerTrue: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/exams/update/${examId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const updatedExam = await response.json();
        console.log("Updated exam:", updatedExam);
        navigate("/admin/allExams");
      } else {
        throw new Error("Failed to update exam");
      }
    } catch (error) {
      console.error("Error updating exam:", error);
    }
  };
  
  return (
    <div>
      <div className="py-5">
        <form onSubmit={submitForm}>
          <div class="form-group">
            <label>Question</label>
            <input
              type="text"
              class="form-control"
              name="question"
              onChange={handleOnChange}
              value={data.question}
            />
          </div>
          <div class="form-group">
            <label>Answer 1</label>
            <input
              type="text"
              class="form-control"
              name="answer1"
              onChange={handleOnChange}
              value={data.answer1}
            />
          </div>
          <div class="form-group">
            <label>Answer 2</label>
            <input
              type="text"
              class="form-control"
              name="answer2"
              onChange={handleOnChange}
              value={data.answer2}
            />
          </div>
          <div class="form-group">
            <label>Answer 3</label>
            <input
              type="text"
              class="form-control"
              name="answer3"
              onChange={handleOnChange}
              value={data.answer3}
            />
          </div>
          <div class="form-group">
            <label>Answer 4</label>
            <input
              type="text"
              class="form-control"
              onChange={handleOnChange}
              value={data.answer4}
              name="answer4"
            />
          </div>

          <label htmlFor="image">
            Image
            <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
              {data.image ? (
                <img
                  style={{ width: "200px" }}
                  src={data.image}
                  className="h-full"
                />
              ) : (
                <span className="text-5xl">Them anh</span>
              )}

              <input
                type={"file"}
                accept="image/*"
                id="image"
                onChange={uploadImage}
                className="hidden"
              />
            </div>
          </label>
          <div>
            <label htmlFor="">Câu trả lời đúng</label>
            <select
              className="bg-slate-200 p-1 my-1"
              id="category"
              name="answerTrue"
              onChange={handleOnChange}
              value={data.answerTrue}
            >
              <option value={"other"}></option>
              <option value={data.answer1}>{data.answer1}</option>
              <option value={data.answer2}>{data.answer2}</option>
              <option value={data.answer3}>{data.answer3}</option>
              <option value={data.answer4}>{data.answer4}</option>
            </select>
          </div>
          <select
            className="bg-slate-200 p-1 my-1"
            id="category"
            name="type"
            onChange={handleOnChange}
            value={data.type}
          >
            <option value={"other"}>------ Category ------</option>
            <option value="0">Liệt</option>
            <option value="1">Không Liệt</option>
          </select>

          <div className="pt-5">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExams;
