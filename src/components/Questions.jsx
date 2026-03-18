import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


function Questions() {
    const [activdIndex, setActiveIndex] = useState(null)
    const handleTogle = (index) => {
        setActiveIndex((prevIndex)=>(prevIndex===index?null:index))
    }
    const questionsAns = [
    {
        question: "What is Netflix?",
        answer:"Who took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum ho took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum.",
    },

    {
        question: "How much does Netflix cost?",
        answer:"Who took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum ho took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum.",
    },

    {
        question: "Where can I watch?",
        answer:"Who took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum ho took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum.",
    },

    {
        question: "How do I cancel?",
        answer:"Who took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum ho took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum.",
    },

    {
        question: "What can I watch on Netflix?",
        answer:"Who took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum ho took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum.",
    },

    {
        question: "Is Netflix good for kids?",
        answer:"Who took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum ho took home mogous ussu urous mortem sotrem tellium angus anous ssoecem ssacum.",
    },
];
  return (
    <div className="py-10 h-screen">
        <div className="text-2xl font-bold">Frequestly asked questions</div>
        {questionsAns.map((item, index) => {
            return (
        <div>
            <div onClick={()=>handleTogle(index)} className="cursor-pointer text-2xl bg-gray-800 p-5 flex items-center justify-between px-10 mt-3">           
            <div >{item.question}</div>            
            <div className="text-5xl duration-500">
               {activdIndex === index ? <RxCross2 /> : "+"}
            </div>
            </div>
            <div className={`bg-gray-800 overflow-hidden text-xl ${activdIndex === index ? "max-h-[500px]" : "max-h-0"} duration-500 px-5 mt-1`}>
              {item.answer}
            </div>           
        </div>
            )
        })}
    </div>
  )
}

export default Questions