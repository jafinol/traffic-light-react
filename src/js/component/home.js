import React, { useState, useEffect } from "react";

//create your first component

export function Home() {
	const [clase1, setClase1] = useState("circleR");
	const [clase2, setClase2] = useState("circleY");
	const [clase3, setClase3] = useState("circleG");
	const [time, setTime] = useState(0);
	const [time2, setTime2] = useState(0);
	const [id, setId] = useState(0);
	const [isPause, setPause] = useState(true);
	const [time3, setTime3] = useState(0);
	const [time4, setTime4] = useState(0);
	let c = 0;

	useEffect(() => {
		setInterval(() => {
			setTime(time => time + 1);
			setTime2(time2 => time2 + 1);
			setTime3(time3 => time3 + 1);
		}, 1000);
	}, []);

	if (time === 2) {
		setTime(0);
		setClase1("circleRON");
		setClase2("circleY");
		setClase3("circleG");
	}

	if (time2 === 4) {
		setTime2(0);
		setTime(0);
		setClase1("circleR");
		setClase2("circleYON");
		setClase3("circleG");
	}

	if (time3 === 6) {
		setTime3(0);
		setTime2(0);
		setTime(0);
		setClase1("circleR");
		setClase2("circleY");
		setClase3("circleGON");
	}

	function RedON() {
		setClase1("circleRON");
		setClase2("circleY");
		setClase3("circleG");
	}

	function yellowON() {
		setClase1("circleR");
		setClase2("circleYON");
		setClase3("circleG");
	}
	function greenON() {
		setClase1("circleR");
		setClase2("circleY");
		setClase3("circleGON");
	}

	return (
		<div className="light">
			<div className={clase1} onClick={() => RedON()}></div>
			<div className={clase2} onClick={() => yellowON()}></div>
			<div className={clase3} onClick={() => greenON()}></div>
		</div>
	);
}
