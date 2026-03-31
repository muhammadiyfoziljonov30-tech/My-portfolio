import { FiArrowDownRight } from "react-icons/fi";

export default function ContactDesigned() {
  return (
    <div className="flex items-center justify-end gap-2 rounded-full p-1 bg-amber-500 pl-3">
        <div className="text-white">
          Contact
        </div>
             <div className="p-2 bg-white rounded-full">
              <FiArrowDownRight size={20}/>
             </div>
    </div>
  )
}
