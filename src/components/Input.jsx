import { forwardRef } from "react"

const Input = forwardRef(function Input({ label, textarea, ...props  }, ref){
    return (
        <p className="flex flex-col">
                <label className="font-bold uppercase md:text-xl text-stone-7  00 ">{label}</label>
                {textarea ? <textarea className="bg-stone-300" {...props} ref={ref}></textarea> : <input className="bg-stone-300" {...props} ref={ref} />}
            </p>
    )
})

export default Input;