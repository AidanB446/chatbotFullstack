"use client"

import styles from "@/app/page.module.css"
import { useState } from "react";


export default function Home() {
  
	const [botText, setBotText] = useState("Hi I am a chatbot! How can I assist you today?");
	
	async function handleClick() {

		const userQuestion = document.getElementById("userTextBox").value;	
		document.getElementById("userTextBox").value = "";

		setBotText("Loading...");			
		const response = await fetch("http://127.0.0.1:5000/chatbot", {
			method: "POST",	
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify({message : userQuestion})
		})	

		const result = await response.json();		
		
		setBotText(result.response);
	}
	

	return (

		<div>
			<br />	
			<textarea className={styles.chatmes} value={botText} readOnly>{botText}</textarea>	
			<br/>
			<input id="userTextBox" className={styles.userText} type="text" placeholder="Type here..."/>
			<br/>		

			<button className={styles.subbutton} onClick={handleClick}>Click to Submit</button>

		</div>

	);
}
