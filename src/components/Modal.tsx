import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,

} from "@nextui-org/react";
import { FaPlusCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";

export default function ModalScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({ modelName: "", modelType: "" });

  const changeHandler = (event:any) => {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = (event:any) => {
    event.preventDefault();
    console.log(formData);
    alert("Created Successfully");
  };
  

  return (
    <>
      <div className="h-screen md:w-[15rem] flex flex-col justify-between p-5 border-2 border-black bg-slate-200">
        <Button
          onPress={onOpen}
          color="primary"
          className="border-2 rounded-lg p-2 border-black bg-slate-200"
        >
          <FaPlusCircle /> Create Container
        </Button>
        <Button
          color="primary"
          className="border-2 rounded-lg p-2 border-black bg-slate-200"
        >
          <IoSettings /> Setting
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
        size="full"
        className="bg-gray-100 border-2 border-black "
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 font-serif text-2xl">
            Creating Sample Container
          </ModalHeader>
          <ModalBody>
            <form onSubmit={submitHandler}>
              <div className="mt-2 mb-4" >
                <label className="text-lg mb-2 block">Name of the Model</label>
                <div className="relative flex items-center">
                  <input
                    name="modelName"
                    type="text"
                    required
                    value={formData.modelName}
                    onChange={changeHandler}
                    placeholder="Enter Model Name"
                    className="w-full py-2 px-2 border-2 bg-gray-100 border-black rounded-md"

                  />
                </div>
              </div>

              <div>
                <label className="text-lg mb-2 block">
                  Type of the Model
                </label>
                <div className="relative flex items-center">
                  <select
                    name="modelType"
                    required
                    value={formData.modelType}
                    onChange={changeHandler}
                    className="w-full text-lg border bg-gray-100 border-black px-4 py-3 rounded-md"
                  >
                    <option value="ChatGpt 3.5">ChatGpt 3.5</option>
                    <option value="ChatGpt Turbo 4">ChatGpt Turbo 4</option>
                    <option value="LLAMA 3">LLAMA 3</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="border-black mt-10 h-8 w-24 border rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200"
              >
                Create
              </button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
