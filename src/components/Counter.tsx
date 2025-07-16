import { useState } from "react";

type CounterProps = {
	initCount?: number;
};

export const Counter: React.FC<CounterProps> = ({ initCount = 0 }) => {
	const [count, setCount] = useState(initCount);

	return (
		<div className="card">
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
		</div>
	);
};
