import styled from "@emotion/styled";
import { observer, useLocalObservable, useAsObservableSource } from "mobx-react-lite";
import { useState } from "react";

const TimerView = observer(() => {
	const timer = useLocalObservable(() => ({
		secondsPassed: 0,
		increaseTimer() {
			this.secondsPassed++;
		},
	}));

	return (
		<span>
			Seconds passed: {timer.secondsPassed}{" "}
			<button onClick={timer.increaseTimer}>click here!</button>
		</span>
	);
});
const Div = styled.div`
	color: blue;
`;

function App() {
	return (
		<Div>
			Electron + vite + react + emotion + storybook
			<TimerView />
		</Div>
	);
}

export default App;
