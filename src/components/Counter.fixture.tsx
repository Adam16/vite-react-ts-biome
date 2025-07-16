import { useFixtureInput } from "react-cosmos/client";
import { Counter } from "./Counter";

export default () => {
	const [count] = useFixtureInput("initCount", 2);
	return <Counter initCount={count} />;
};
