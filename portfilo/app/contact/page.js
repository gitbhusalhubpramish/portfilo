"use client"
import {useState} from "react"
import info from "@/data/info.json"
export default function Contact(){
	const [files, setFiles] = useState([])
	const [formData, setFormData] = useState({reply:"", message:"", attachment:files, subject:""})
	const [message, setMessage] = useState("")
	const [loading, setLoading] = useState(false)
	const handelSubmit = async (e)=>{
		e.preventDefault()
		let ok;
		if (formData.subject===""){
			ok = confirm("do you want to send message without subject?")
		}
		setLoading(true);
		if (ok){
		try {
			const form = new FormData();
				form.append("reply", formData.reply);
				form.append("message", formData.message);
				form.append("subject", formData.subject);

				// Append files
				files.forEach(file => {
						form.append("attachment", file);
				});
				console.log(form)
				console.log("stringfy",JSON.stringify(form))
			const res = await fetch("/api/contact", {
				method: "POST",
				body: form,
			});
			console.log(formData)
			console.log("fetched")
			if (res.ok) {
				setMessage("Form submitted successfully!");
				setFiles([])
				setFormData({reply:"", message:"", attachment:files, subject:""});
				console.log(message, res)
				alert("Your message was sent successfully.")
			} else {
				setMessage("Failed to submit form.");
				console.log(message, res)
				alert("something went wrong")
			}
		} catch (err) {
			setMessage("Error: " + err.message);
			console.log(message)
			alert("something went wrong")
		}}

		console.log(message)
		setLoading(false);
	}
	return (
	<>
		<div className="min-h-screen sm:m-[15%] mx-0 m-30">
				<div className="sm:m-10  text-gray-300">
					<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
						<div className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden p-8">
							<h1 className="sm:text-5xl text-3xl font-bold text-[#33a400]">Info</h1>
							<div className="flex flex-wrap sm:flex-row flex-col">
								<div className="justify-center items-center flex flex-col flex-1">
									<div className="rounded-full border-1 border-[#3d5afe] overflow-hidden aspect-square w-7/10">
										<img className="object-cover w-full h-full" src={info.pic}/>
									</div>
									<div className="w-7/10">
									<h2 className="text-3xl text-[#33a400]">{info.display_name}</h2>
									<p className="font-thin text-gray-300">{info.real_name}</p>
									</div>
								</div>
								<div className="flex flex-col w-1/2 flex-wrap gap-3 mt-4">
									{/* Location */}
									<div className="flex items-center gap-2">
										<div className="h-5 w-5">
											<img src={info.locaionpic} className="h-full w-full object-contain" />
										</div>
										<p className="text-sm text-[#cbd5e1]">{info.location}</p>
									</div>
									<div className="flex-col flex gap-2 flex-wrap  justify-around">
									{/* Schools */}
									{info.scl.map((scl, index) => (
										<div key={index} className="flex items-center gap-2 flex-1">
											<div className="h-5 w-5">
												<img src={info.sclimg} className="h-full w-full object-contain" />
											</div>
											<p className="text-sm text-[#cbd5e1]">{scl.name}</p>
										</div>
									))}
									</div>
									<div className="flex-col flex gap-2 justify-around">
										{/* Social Media */}
										{info.social.map((media, index) => (
											<div key={index} className="flex w-full items-center gap-2">
												<div className="h-5 w-5">
													<img src={`/${media.img}`} className="h-full w-full object-contain opacity-80" />
												</div>
												<a
													href={media.href}
													className="text-sm text-[#4fd1ff] hover:text-[#00c4ff] underline transition-colors duration-200"
												>
													{media.name}
												</a>
											</div>
										))}
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="sm:m-10  text-gray-300">
					<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
						<div className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden p-8">
							<h1 className="sm:text-5xl text-3xl font-bold text-[#33a400]">Message me</h1>
							<form className="sm:m-10" onSubmit={handelSubmit} method="POST">
								<div className="flex flex-wrap w-full mb-2">
									<label htmlFor="subject" className="text-xl">Subject:</label>
									<div className="px-5 w-full">
									<input id ="subject" className= "w-full bg-[#0b1120] text-[#e5e7eb] placeholder-[#94a3b8] border border-[#334155] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] flex-1" placeholder="Subject" name="subject" value={formData.subject} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}/>
									</div>
								</div> 
								<div className=" w-full">
									
									<label htmlFor="message" className="text-xl">Message:</label>
									<div className="px-5 pb-0 w-full">
									<textarea id ="message" className= "bg-[#0b1120] text-[#e5e7eb]  placeholder-[#94a3b8] border border-[#334155] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] w-full h-40 justify-start" name="message" placeholder="Your Message" value={formData.message} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} required/></div>
									{(files.length>0)&&(
									<div className="mx-5 sm:flex-row flex-wrap flex flex-row">
									{files.map((file,index)=>(
										<div key={index} className="bg-[#162038] sm:w-1/3 w-full text-[#b0c4de] px-3 py-1 rounded-md border border-[#2e4fff] m-1 text-xl h-10 flex"><p className="flex-1 overflow-hidden">{file.name}</p>
										<button type = "button" className="flex justify-center items-center" onClick={()=>setFiles(fls=>fls.filter(item=>item!==file))}>
											<div className="text-4xl cursor-pointer">
												&times; 
											</div>
										</button></div>
									))}
									</div>)}
									<div className="flex">
									<label htmlFor="attachment" className="flex m-2 mx-5 cursor-pointer">Attach a file: <img src="linkicon.svg" alt="" className="border-1 border-black rounded-md bg-[#0b1120] ml-2 "/></label>
									<input
										id="attachment"
										type="file"
										name="attachment"
										className="hidden"
										multiple
										onChange={(e) => {
											const newFiles = Array.from(e.target.files);
											setFiles(prevFiles => {
												const updatedFiles = [...prevFiles, ...newFiles];
												setFormData(prev => ({ ...prev, [e.target.name]: updatedFiles }));
												return updatedFiles;
											});
										}}

									/>

									</div>
								</div>
								<div className="flex flex-wrap w-full mb-2">
									<label htmlFor="reply" className="text-xl">Get reply on:</label>
									<div className="px-5 w-full">
									<input id ="reply" type="email" className= "w-full bg-[#0b1120] text-[#e5e7eb] placeholder-[#94a3b8] border border-[#334155] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] flex-1" placeholder="yourname@domain.com" name="reply" required value={formData.reply} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}/>
									</div>
								</div> 
								<div className="flex justify-end mt-5 px-5">
									<button type="submit" className="bg-[#33a400] text-[#0b1120] px-6 py-2 rounded-lg font-bold hover:bg-[#28a300] transition-colors cursor-pointer" disabled={loading}>
										Send
									</button>
								</div>
							</form>
						</div>
						
					</div>
				</div>
		</div>
	</>
	)
}
