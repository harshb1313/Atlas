export const Contact = () => {
const handleForm = (formData)=>{
console.log(formData.entries())
}

    return <section className="p=10" >
        <form action={handleForm} className="text-white flex flex-col gap-[2.5vh] w-[50%] p-[2rem]">
            <input type="text" placeholder="Name" className="border border-white-500"/>
            <input type="email" placeholder="Email" className="border border-white-500"/>
            <textarea rows="5" cols="30" placeholder="Leave your message" className="border border-white-500"></textarea>
            <button type="submit" className="border border-white-500 cursor-pointer" >SUBMIT</button>
        </form>
    </section>
}